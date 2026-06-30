"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type FormField = {
  fieldType?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  options?: { label?: string; value?: string }[];
  defaultValue?: string;
};

type FormDoc = {
  id: string;
  title?: string;
  fields?: FormField[];
  submitButtonText?: string;
  successTitle?: string;
  successMessage?: string;
};

type Props = {
  formId: string;
  formDoc?: FormDoc;
  heading?: string;
  description?: string;
  submitButtonText?: string;
  successTitle?: string;
  successMessage?: string;
};

export default function DynamicForm({
  formId,
  formDoc,
  submitButtonText,
  successTitle = "Submitted!",
  successMessage = "Thank you for your submission.",
}: Props) {
  const fields = formDoc?.fields ?? [];
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formId, data: values }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Submission failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  };

  if (status === "success") {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-green-800">
        <div className="flex items-center gap-2 font-bold mb-2">
          <CheckCircle2 size={18} /> {formDoc?.successTitle ?? successTitle}
        </div>
        <p className="text-sm">{formDoc?.successMessage ?? successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {fields.map((field, i) => {
        const type = field.fieldType ?? "text";
        const name = field.name ?? `field_${i}`;
        if (type === "divider" || type === "heading") return null;

        if (type === "textarea") {
          return (
            <div key={name}>
              {field.label && <label className="block text-sm font-bold text-primary mb-1">{field.label}</label>}
              <textarea
                name={name}
                required={field.required}
                placeholder={field.placeholder}
                value={values[name] ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none resize-none"
              />
            </div>
          );
        }

        if (type === "select") {
          return (
            <div key={name}>
              {field.label && <label className="block text-sm font-bold text-primary mb-1">{field.label}</label>}
              <select
                name={name}
                required={field.required}
                value={values[name] ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="">Select...</option>
                {(field.options ?? []).map((opt) => (
                  <option key={opt.value ?? opt.label} value={opt.value ?? opt.label}>
                    {opt.label ?? opt.value}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        if (type === "checkbox") {
          return (
            <label key={name} className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={values[name] === "true"}
                onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.checked ? "true" : "false" }))}
              />
              {field.label ?? name}
            </label>
          );
        }

        return (
          <div key={name}>
            {field.label && <label className="block text-sm font-bold text-primary mb-1">{field.label}</label>}
            <input
              type={type === "email" ? "email" : type === "tel" ? "tel" : type === "number" ? "number" : "text"}
              name={name}
              required={field.required}
              placeholder={field.placeholder}
              value={values[name] ?? field.defaultValue ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
        );
      })}

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="w-full btn-primary py-3">
        {status === "loading" ? "Sending..." : formDoc?.submitButtonText ?? submitButtonText ?? "Submit"}
      </button>
    </form>
  );
}
