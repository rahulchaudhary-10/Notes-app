import NotesList from "./components/NotesList";
import {useState, useEffect}from 'react'
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header'

const App = () => {
  // const [notes,setNotes]=useState([]);

  const [notes,setNotes] = useState(JSON.parse(
    localStorage.getItem('notes')
  ));

const [searchText,setSearchText] = useState('');


const [darkMode, setDarkMode] = useState(false);


useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('notes')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
  console.log(notes)
}, []);


const addNote = (text) => {
  // console.log(text);
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
  // localStorage.setItem(
  //   'notes',
  //   JSON.stringify(newNotes));
}

const deleteNote = (id) => {
      const newNotes=notes.filter((note)=> note.id !== id);
      setNotes(newNotes);
}


useEffect(() => {
  localStorage.setItem(
    'notes',
    JSON.stringify(notes)
  );
}, [notes]);
  return(
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList  
        notes={notes.filter((note)=>
          note.text.toLowerCase().includes(searchText)
          )} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        />
        </div>
  </div>
  )
};

export default App;