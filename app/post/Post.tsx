"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

interface PostProps {
  avatarUrl: string;
  username: string;
  postText: string;
  hashtags: string[];
  imageUrl?: string;
  comments: { id: number; text: string; username: string }[];
}

export const Post: React.FC<PostProps> = ({
  avatarUrl,
  username,
  postText,
  hashtags,
  imageUrl,
  comments,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto my-4">
      {/* Header with Avatar and Username */}
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={`${username}'s avatar`} />
          <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-base font-medium">{username}</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Just now
          </CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      {/* Post Content */}
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed">{postText}</p>
        <div className="flex gap-2">
          {hashtags.map((tag, index) => (
            <span key={index} className="text-blue-500 text-sm">
              #{tag}
            </span>
          ))}
        </div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Post media"
            className="rounded-lg object-cover w-full h-64"
          />
        )}
      </CardContent>

      {/* Footer with Actions */}
      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLike}
            className={`flex items-center gap-2 ${
              isLiked ? "text-red-500" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {likeCount > 0 && <span>{likeCount}</span>}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Comment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <h2 className="text-lg font-semibold mb-4">Comments</h2>
              <div className="space-y-2">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-2">
                    <Avatar>
                      <AvatarFallback>
                        {comment.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{comment.username}</p>
                      <p className="text-sm">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardFooter>
    </Card>
  );
};