import React, { useEffect } from 'react'
import Read from '../../components/board/Read'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import * as boards from '../../apis/boards'

const ReadContainer = () => {

  const { id } = useParams()

  // 🧊 state 
  const [board, setBoard] = useState({})

  // 게시글 조회 요청 
  const getBoard = async () => {
    const response = await boards.select(id)
    const data = await response.data
    console.log(`board : ${data}`);
    console.dir(data)
    setBoard(data)
  }

  useEffect( () => {
    // 게시글 정보 
    getBoard()
  }, [])

  return (
    <Read board={board} />
  )
}

export default ReadContainer