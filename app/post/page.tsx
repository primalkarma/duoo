import React from 'react'
import { Post } from './Post'

const page = () => {
    const dummyPosts = [
        {
          avatarUrl: "https://i.pravatar.cc/150?img=1",
          username: "AliceWonder",
          postText:
            "Just finished reading an amazing book! Highly recommend it to everyone.",
          hashtags: ["books", "reading", "literature"],
          imageUrl: "https://ik.imagekit.io/won7cy6ir/general/landing.jpg?updatedAt=1740062664986",
          comments: [
            { id: 1, text: "What's the book about?", username: "BookLover123" },
            { id: 2, text: "I love reading too!", username: "PageTurner" },
          ],
        },
        {
          avatarUrl: "https://i.pravatar.cc/150?img=2",
          username: "BobTheBuilder",
          postText: "Working on a new project! Excited to share more soon.",
          hashtags: ["coding", "javascript", "react"],
          imageUrl: "https://ik.imagekit.io/won7cy6ir/posts/marsh_frog.svg?updatedAt=1738605504773",
          comments: [
            { id: 1, text: "Looking forward to it!", username: "TechFan" },
            { id: 2, text: "Good luck with the project!", username: "DevGuru" },
          ],
        },
        {
          avatarUrl: "https://i.pravatar.cc/150?img=3",
          username: "CharlieArt",
          postText: "Here's my latest artwork. Hope you like it!",
          hashtags: ["art", "painting", "creativity"],
          imageUrl: "https://ik.imagekit.io/won7cy6ir/groceries/groc_cats/snacks.svg?updatedAt=1741159496158",
          comments: [
            { id: 1, text: "Wow, this is stunning!", username: "ArtAdmirer" },
            { id: 2, text: "You're so talented!", username: "CreativeMind" },
          ],
        },
      ];
  return (
    <div className="space-y-6">
      {dummyPosts.map((post, index) => (
        <Post
          key={index}
          avatarUrl={post.avatarUrl}
          username={post.username}
          postText={post.postText}
          hashtags={post.hashtags}
          imageUrl={post.imageUrl}
          comments={post.comments}
        />
      ))}
    </div>
  )
}

export default page