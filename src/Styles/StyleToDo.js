import styled from "styled-components";

export const Container = styled.main`
 display: flex;
 justify-content: center;
 width: 100%;
 height: 100vh;

 form{
    padding: 5rem;
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }

 h2{
   font-family: 'Cairo Play', cursive;
   font-size: 2em;
   padding: .7rem;
 }

 div{
   display: flex;
   justify-content: space-around;
   width: 100%;
 }

 input{ 
    padding: .7em;
    border-radius: 9em;
    border: 2px solid #72BF80;
    font-family: 'Arvo', serif;
 }

 button{
   font-family: 'Cairo Play', cursive;
   font-size: .9em;
   background-color: #9cd4df;
   padding: .6em;
   border-radius: 3em;
   border: none;
   cursor: pointer;
   
 }

 .delbtn{
   background-color: #dfa6a6;
 }
`

export const List = styled.section`
border-left: 1px solid black;
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 font-family: 'Arvo', serif;

 div{
   display: flex;
   align-items: center;
   width: 30rem;
   margin-top: 5rem;
 }
 
 li{
   display: flex;
   padding: 1rem;
}

 button{
   font-size: 1em;
   padding: 0rem .8rem .1rem .8rem;
   border-radius: 3rem; 
 }
`