import  { useState } from "react";
import type {
  Post,
  UpdatePostPayload,
} from "../../../types/StateFromHell/post";
import CommentList from "./CommentList";
import useRenderCount from "../hooks/useRenderCount";
import {  updatePostById } from "../services/posts";

const PostCard = ({ post }: { post: Post }) => {
  const { CountComponent } = useRenderCount();
  const [mode, setMode] = useState<"view" | "edit">("view");
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState<UpdatePostPayload>({
    title: post?.title || "",
    body: post?.body || "",
  });

  const handlePostUpdate = async () => {
    setLoading(true);
    try {
      const resp = await updatePostById(post.id, editData);
      await resp.json();
      
    //await fetchPostById(id);

     // const data = (await dataResp?.json()) as Post;
      setMode("view");
    } catch (error) {
      setEditData({ title: post?.title, body: post?.body });
      setMode("view");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditData({ title: post.title, body: post.body });
    setMode("view");
  };

  return (
    <div key={post.id}>
      <div className="flex justify-between items-center">
        {mode === "view" ? (
          <h1 className="text-sm font-semibold text-slate-600">{post.title}</h1>
        ) : (
          <input
            className="w-full px-2 py-1"
            value={editData?.title}
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, title: e.target.value }))
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
        <p className="text-sm text-slate-500">{post.body}</p>
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
            onClick={handlePostUpdate}
          >
            {loading ? "saving..." : "save"}
          </button>
        </div>
      )}
      <CommentList postId={post?.id} />
    </div>
  );
};

export default PostCard;
