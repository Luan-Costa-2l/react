import React, { useState, useEffect } from "react";
import { PostsProps } from "./types/Posts";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { api } from "./api";

const App = () => {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setLoading(false);
    setPosts(json);
  }

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1);
    if(json.id) {
      alert('Post adicionado com sucesso!');
    } else {
      alert('Ocorreu algum erro!');
    }
  }

  return (
    <div className='p-3'>
      {loading &&
        <div className="font-bold uppercase text-xl">Carregando...</div>
      }

      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 &&
      <>
        <div className="text-center mb-16">
          <button className="block bg-gray-600 rounded-xl p-2 text-white mx-auto mb-2" onClick={loadPosts}>Atualizar Posts</button>
          <div>Total de Posts: {posts.length}</div>
        </div>
        <div>
          {posts.map((item, index) => (
            <PostItem data={item} key={index} />
          ))}
        </div>
      </>
      }

      {!loading && posts.length == 0 &&
        <div className="font-bold text-2xl">Não há posts para exibir.</div>
      }
      
    </div>
  );
}

export default App;

// Link da api
// https://jsonplaceholder.typicode.com/posts