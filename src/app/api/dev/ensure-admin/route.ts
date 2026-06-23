import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Dev-only: promote first user to admin and clear login lock state.
 * Visit once: GET /api/dev/ensure-admin
 */
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Disabled in production" }, { status: 403 });
  }

  const payload = await getPayload({ config });

  const { docs: allUsers } = await payload.find({
    collection: "users",
    limit: 20,
    overrideAccess: true,
  });

  const { totalDocs: adminCount } = await payload.count({
    collection: "users",
    where: { role: { equals: "admin" } },
    overrideAccess: true,
  });

  if (allUsers.length === 0) {
    return NextResponse.json({
      ok: false,
      message: "No users found. Create the first user at /admin/create-first-user",
      users: [],
    });
  }

  let updated = null;

  if (adminCount === 0) {
    const target =
      allUsers.find((u) => u.email === "muhammadhanan23230@gmail.com") ?? allUsers[0];

    updated = await payload.update({
      collection: "users",
      id: target.id,
      data: {
        role: "admin",
        name: target.name || "Administrator",
        loginAttempts: 0,
        lockUntil: null,
      },
      overrideAccess: true,
      context: { disableActivityLog: true },
    });
  }

  return NextResponse.json({
    ok: true,
    adminCount,
    users: allUsers.map((u) => ({
      id: u.id,
      email: u.email,
      role: u.role,
      loginAttempts: u.loginAttempts,
      lockUntil: u.lockUntil,
    })),
    updated: updated
      ? { id: updated.id, email: updated.email, role: updated.role }
      : null,
  });
}
