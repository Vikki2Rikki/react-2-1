import { Component } from 'react'
// import Counter from './Counter/Counter'
import Header from './Header/Header'
import Modal from './Modal/Modal'
import ToDoList from './ToDoList/ToDoList'

class App extends Component{
   state = {
      isOpenModal: false
   }

  openModal  = ()=> {
      this.setState({isOpenModal: true})
   }

   closeModal = ()=>{
      this.setState({isOpenModal: false})
   }

   render(){
      return (
      <div className="container">
         <Header openModal = {this.openModal}/>
         {/* <Counter /> */}
      {this.state.isOpenModal && <Modal closeModal={this.closeModal}>
         <h2>Modal</h2>
         </Modal>}
         <ToDoList/>
      </div>
   )}
}

export default App