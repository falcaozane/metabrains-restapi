import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Pokemon = () => {
    const[num, setnum]= useState();
    const [name,setname] = useState();
    const [moves,setmoves] = useState();
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setname(res.data.name)
            setmoves(res.data.moves.length)
        }
        getData();

    })

    return (
    <>
        <h1>Pokemon {num}</h1>
        <h2>My name is {name}</h2>
        <h3>No. of Moves: {moves}</h3>
        <select name="" id="" value={num} onChange={(event)=>{
            setnum(event.target.value)
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </>
  )
}

export default Pokemon