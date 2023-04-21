import { Link } from 'react-router-dom'
import React, {useState} from "react";
import styled from "styled-components";


const Layout = styled.div`
  margin: 0 auto;
  min-width : 800px;
  max-width : 1200px;
`;

const Container = styled.div`
  border: 1px solid rgb(154, 255, 87);
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Write = styled.div`
  background-color: rgb(179, 255, 155);
  border-radius : 12px;
  padding: 30px;
  margin: 0 auto;
  justify-content: space-between;
`
const ToDoListEntire = styled.div`
  padding: 0 24px;
`;

const Font = styled.div`
  padding: 20px 0px 20px 0px;
  font-size: 30px;
  font-weight: 700;
`;

const ToDoListLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const WriteBox = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const WriteLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

const Input = styled.input`
  height: 40px;
  width: 270px;
  border: none;
  border-radius: 12px;
  padding: 0px 20px;
`;

const Addbutton = styled.div`
    background-color: #8db67c;
    height: 40px;
    width: 150px;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
  `

const ToDoListBox = styled.div`
border: 4px solid rgb(250, 233, 149);
border-radius: 12px;
padding: 12px 24px 24px;
width: 270px;
`;

const ToDoListButton = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const DeleteButton = styled.button`
  background-color: #97c563;
  height: 40px;
  width: 130px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;

const ActionButton = styled.button`
  background-color: #ffc87a;
  height: 40px;
  width: 130px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;


const Home = () => {
    const [todos, setTodos] = useState([
      { 
        id: 0, 
        title: '백설공주', 
        contents: '해피엔딩', 
        isDone: false,
      },
      { 
        id: 1, 
        title: '인어공주', 
        contents: '새드앤딩', 
        isDone: true,
      },
    ])
  
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
  
  
    const titleChangeHandler = (event) => {
      setTitle(event.target.value)
    }
  
    const contentsChangeHandler = (event) => {
      setContents(event.target.value)
    }
  
    const addButtonHendler = ()=> {
      const newTodo = {
        id: todos.length + 1,
        title,
        contents,
      }
      setTodos([...todos, newTodo])
      setTitle('')
      setContents('')
    }
  
    const clickRemoveButtonHandler = (id) => {
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
    }
  
    // 완료, 취소 버튼
    const clickActionButtonHandler = (id) => {
      const newTodos = todos.map(todo => todo.id === id? {...todo, isDone : !todo.isDone} : todo)
        setTodos(newTodos) 
    }
  
    const workingTodos = todos.filter(item => !item.isDone)
    const doneTodos = todos.filter(item => item.isDone)
  
    return (
      <Layout>
        <Container>
          <div>My Todo List</div> 
          <div>React</div>
        </Container>
        <Write>
            <WriteBox>
            <WriteLabel>제목</WriteLabel>
            <Input
            value = {title}
            onChange = {titleChangeHandler}
            ></Input>
            <WriteLabel>내용</WriteLabel>
            <Input
            value = {contents}
            onChange = {contentsChangeHandler}
            ></Input>
            </WriteBox>
            <div><Addbutton onClick={addButtonHendler}>추가하기</Addbutton></div>
        </Write>
        <ToDoListEntire>
        <Font>Working.. 🌱</Font>
        <ToDoListLine>
            {workingTodos.map(function(item) {
              return (
                <ToDoListBox key={item.id} >
                <div>
                <Link to={'/detail'}>상세보기</Link>
                <h2>{item.title}</h2>
                <div>{item.contents}</div> 
                </div>
                <ToDoListButton>
                <DeleteButton 
                onClick={() => clickRemoveButtonHandler(item.id)}>삭제하기</DeleteButton>
                <ActionButton
                onClick={() => clickActionButtonHandler(item.id)}>{item.isDone ? '취소' : '완료'}</ActionButton>
                </ToDoListButton>
                </ToDoListBox>
              )
              })}
        </ToDoListLine>
        <Font>Done..! 🌳</Font>
        <ToDoListLine>
            {doneTodos.map((item) => (
              <ToDoListBox key={item.id} >
              <div>
              <Link to={'/detail'}>상세보기</Link>  
              <h2>{item.title}</h2>
              <div>{item.contents}</div> 
              </div>
              <ToDoListButton>
              <DeleteButton 
              onClick={() => clickRemoveButtonHandler(item.id)}>삭제하기</DeleteButton>
              <ActionButton
              onClick={() => clickActionButtonHandler(item.id)}>{item.isDone ? '취소' : '완료'}</ActionButton>
              </ToDoListButton>
              </ToDoListBox>
              ))}
        </ToDoListLine> 
        </ToDoListEntire>
      </Layout>
    );
  }
  

export default Home