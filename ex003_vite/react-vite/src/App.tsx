import React, { useState, useEffect } from "react";
import { PostsProps } from "./types/Posts";

const App = () => {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [addTitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let json = await response.json();
      setLoading(false);
      setPosts(json);
    } catch(e) {
      console.error(e);
    }
    
  }

  const handleAddTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(event.target.value);
  }
  const handleAddBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(event.target.value);
  }
  const handleAddClick = () => {
    alert(addTitleText+' '+addBodyText);
    setAddTitleText('');
    setAddBodyText('');
  }

  return (
    <div className='p-3'>
      {loading &&
        <div className="font-bold uppercase text-xl">Carregando...</div>
      }

      <fieldset className="text-center border-2 mb-3 flex flex-col p-4 px-64">
        <legend className="font-bold">Adicionar Novo Post</legend>
        <input
          value={addTitleText}
          onChange={handleAddTitleChange}
          type="text"
          placeholder="Digite um título"
          required
          className="border-b-2 mb-2 outline-none" 
        />
        <textarea 
          value={addBodyText} 
          onChange={handleAddBodyChange} 
          name="body" 
          className="resize-none border-2 mb-2 outline-none"
        ></textarea>
        <button onClick={handleAddClick} className='bg-blue-700 rounded-xl text-white hover:opacity-90'>Adicionar Post</button>
      </fieldset>

      {!loading && posts.length > 0 &&
      <>
        <div className="text-center mb-16">
          <button className="block bg-gray-600 rounded-xl p-2 text-white mx-auto mb-2" onClick={loadPosts}>Atualizar Posts</button>
          <div>Total de Posts: {posts.length}</div>
        </div>
        <div>
          {posts.map((item, index) => (
            <div key={index} className='text-center max-w-3xl mx-auto mb-8'>
              <h4 className="font-bold">{item.title}</h4>
              <small>#{item.id} - Usuário: {item.userId}</small>
              <p>{item.body}</p>
            </div>
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

// https://jsonplaceholder.typicode.com/posts