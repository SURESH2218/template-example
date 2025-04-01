import React, { useState } from "react";
import { Image, FileText, Video, Link, PlusCircle } from "lucide-react";

const CreatePost: React.FC = () => {
  const [postText, setPostText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-soft overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://i.pravatar.cc/100?img=11"
              alt="Your profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div
              className={`transition-all duration-300 ease-in-out ${
                isExpanded ? "h-32" : "h-10"
              }`}
            >
              <textarea
                placeholder="Share your research or ask a question..."
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                onFocus={() => setIsExpanded(true)}
                className="w-full h-full px-4 py-2 bg-secondary dark:bg-gray-800 rounded-xl resize-none border-0 focus:ring-brand-400"
              />
            </div>

            {isExpanded && (
              <div className="mt-3 flex flex-wrap justify-between items-center animate-fade-in">
                <div className="flex flex-wrap gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-muted-foreground hover:bg-secondary transition-colors text-sm">
                    <Image size={18} />
                    <span className="font-medium">Photo</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-muted-foreground hover:bg-secondary transition-colors text-sm">
                    <Video size={18} />
                    <span className="font-medium">Video</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-muted-foreground hover:bg-secondary transition-colors text-sm">
                    <FileText size={18} />
                    <span className="font-medium">Document</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-muted-foreground hover:bg-secondary transition-colors text-sm">
                    <Link size={18} />
                    <span className="font-medium">Link</span>
                  </button>
                </div>
                <button
                  className={`px-4 py-1.5 rounded-md text-white font-medium transition-all ${
                    postText.trim().length > 0
                      ? "bg-brand-500 hover:bg-brand-600"
                      : "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                  }`}
                  disabled={postText.trim().length === 0}
                >
                  Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {!isExpanded && (
        <div className="px-4 py-2 border-t border-border">
          <div className="flex justify-between">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-muted-foreground hover:bg-secondary transition-colors text-sm">
              <Image size={18} />
              <span className="font-medium">Photo</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-muted-foreground hover:bg-secondary transition-colors text-sm">
              <Video size={18} />
              <span className="font-medium">Video</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-muted-foreground hover:bg-secondary transition-colors text-sm">
              <FileText size={18} />
              <span className="font-medium">Document</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-muted-foreground hover:bg-secondary transition-colors text-sm">
              <PlusCircle size={18} />
              <span className="font-medium">More</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
