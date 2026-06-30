"use client";

import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, MessageSquare } from "lucide-react";

type Comment = {
  id: string;
  author?: string;
  content?: string;
  createdAt?: string;
  adminReply?: string;
};

type Props = {
  postId: string;
  enabled?: boolean;
  requireName?: boolean;
  requireEmail?: boolean;
  initialComments?: Comment[];
};

export default function BlogComments({
  postId,
  enabled = true,
  requireName = true,
  requireEmail = true,
  initialComments = [],
}: Props) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [loaded, setLoaded] = useState(initialComments.length > 0);
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const loadComments = async () => {
    try {
      const res = await fetch(`/api/comments?postId=${encodeURIComponent(postId)}`);
      const json = await res.json();
      if (res.ok) setComments(json.comments ?? []);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    if (initialComments.length) {
      setLoaded(true);
      return;
    }
    void loadComments();
  }, [postId, initialComments.length]);

  if (!enabled) return null;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, author, email, content, website }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to submit comment");
      setStatus("success");
      setContent("");
      setWebsite("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to submit comment");
    }
  };

  return (
    <section className="mt-16 pt-12 border-t border-slate-100" aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="text-2xl font-black text-primary mb-6 flex items-center gap-2">
        <MessageSquare size={22} className="text-accent" /> Comments
      </h2>

      {!loaded && <p className="text-slate-500 text-sm mb-6">Loading comments...</p>}

      {comments.length > 0 && (
        <div className="space-y-6 mb-10">
          {comments.map((c) => (
            <div key={c.id} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <div className="font-bold text-primary">{c.author}</div>
              <p className="text-slate-600 mt-2 whitespace-pre-wrap">{c.content}</p>
              {c.adminReply && (
                <div className="mt-4 pl-4 border-l-4 border-accent text-sm text-slate-600">
                  <strong className="text-primary">Reply:</strong> {c.adminReply}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {status === "success" ? (
        <div className="p-4 bg-green-50 border border-green-200 rounded-2xl text-green-800 flex items-start gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          <p>Thank you! Your comment has been submitted and is awaiting moderation.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
          <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              required={requireName}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              required={requireEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
          <textarea
            placeholder="Write your comment..."
            required
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none resize-none"
          />
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-700 text-sm">
              <AlertCircle size={16} /> {error}
            </div>
          )}
          <button type="submit" disabled={status === "loading"} className="btn-primary px-6 py-3">
            {status === "loading" ? "Submitting..." : "Post Comment"}
          </button>
        </form>
      )}
    </section>
  );
}
