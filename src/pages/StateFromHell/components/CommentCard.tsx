import { useState } from "react";
import type { Comment, UpdateCommentPayload } from "../types/comment";
import useRenderCount from "../hooks/useRenderCount";
import { updateCommentById } from "../services/comments";

export const CommentCard = ({ comment }: { comment: Comment }) => {
  const { CountComponent } = useRenderCount();
  const [mode, setMode] = useState<"view" | "edit">("view");
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState<UpdateCommentPayload>({
    body: comment?.body || "",
    email: comment?.email || "",
    name: comment?.name || "",
  });

  const defaultCommentState = {
    email: comment?.email || "",
    body: comment?.body || "",
    name: comment?.name || "",
  };

  const handleCommentUpdate = async () => {
    setLoading(true);
    try {
      const resp = await updateCommentById(comment.id, editData);
      await resp.json();

      setMode("view");
    } catch (error) {
      setEditData(defaultCommentState);
      setMode("view");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditData(defaultCommentState);
    setMode("view");
  };

  return (
    <div className="border-slate-200 border rounded-xl p-1 px-2">
      <div className="flex items-center justify-between">
        {mode === "view" ? (
          <p className="text-sm text-slate-500">{comment.name}</p>
        ) : (
          <input
            className="w-full px-2 py-1"
            value={editData?.name}
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        )}

        <div className="flex gap-1 items-center">
          <div className="rounded-xl flex gap-2 bg-slate-100 px-2 py-1">
            <button
              className={`rounded-lg cursor-pointer ${mode === "view" ? "bg-amber-600 text-white" : "bg-slate-200"} px-2 py-1`}
              onClick={() => setMode("view")}
              disabled={loading}
            >
              view
            </button>
            <button
              className={`rounded-lg cursor-pointer ${mode === "edit" ? "bg-amber-600 text-white" : "bg-slate-200"} px-2 py-1`}
              onClick={() => setMode("edit")}
              disabled={loading}
            >
              Edit
            </button>
          </div>
          {CountComponent}
        </div>
      </div>
      {mode === "view" ? (
        <p className="text-sm text-slate-700">{comment.body}</p>
      ) : (
        <textarea
          className="w-full px-2 py-1"
          value={editData?.body}
          onChange={(e) =>
            setEditData((prev) => ({ ...prev, body: e.target.value }))
          }
          rows={5}
        />
      )}
      {mode === "view" ? (
        <p className="text-sm text-slate-500">{comment.email}</p>
      ) : (
        <input
          type="email"
          value={editData?.email}
          onChange={(e) =>
            setEditData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      )}

      {mode == "edit" && (
        <div className="flex items-center gap-2.5 justify-end">
          <button
            className="bg-slate-500 text-white"
            disabled={loading}
            onClick={handleCancel}
          >
            cancel
          </button>
          <button
            disabled={loading}
            className="bg-blue-600 text-white"
            onClick={handleCommentUpdate}
          >
            {loading ? "saving..." : "save"}
          </button>
        </div>
      )}
    </div>
  );
};
