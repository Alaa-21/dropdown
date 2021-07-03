import React,{useState} from 'react';
import Accordion from './component/Accordion';
import Search from './component/Search';
import Dropdown from './component/Dropdown';
const items = [
    {
        title: 'What is React?',
        content: 'React is a Frontend javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is favourite framework among engineers' 
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    }
]


const options = [
    {
        label: 'the color red',
        value: 'red'
    },
    {
        label: 'the color is Green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
]
const App =  ()=>{
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true)
    return(
        <div>
            <button onClick={()=>{setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown 
                selected={selected} 
                onSelectedChange={setSelected}
                options={options}    
            /> : null}
        </div>
    )
};
 export default App;