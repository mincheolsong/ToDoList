import React from 'react';
import './TodoListTemplate.css';

function TodoListTemplate(props){
	
  return(
			<div className="todo-list-template">
				<div className="title">
					오늘 할 일
				</div>
				<div className="form-wrapper">
					<input className="form" value={props.입력값} onChange={(e)=>{props.입력값변경(e.target.value)}}/>
					<div className="create-button" onClick={()=>{
							props.일정변경([...props.일정, {content:props.입력값, checked : false}]);
							props.입력값변경('');
						}}>입력</div>
				</div>

				<div className="todos-wrapper">
					{
						props.일정.map((a,i)=>{
							return(
								<div key={i}>
									<Content 일정={a} 일정변경={props.일정변경} i={i} 전체일정={props.일정} />
								</div>
							)
						})
					}
				</div>
			</div>
  )
}

function Content(props){
	return(
		
			<div className="content-container">
				<ButtonX 전체일정={props.전체일정} 일정변경={props.일정변경} i={props.i}/>
				<div className={`content ${props.일정.checked && 'checked-content'}`} onClick={()=>{
					let tmp = [...props.전체일정];
					tmp[props.i].checked = !tmp[props.i].checked ;
					props.일정변경(tmp);
				}}>
					{props.일정.content}
				</div>
				<div className="check-button">
					{
						props.일정.checked && '✓'
					}
				</div>
			</div>
	
	)
}	

function ButtonX(props) {
	
	return(
			<div className="remove" onClick={()=>{
				let tmp = [...props.전체일정];
				tmp.splice(props.i,1);
				props.일정변경(tmp);
			}}>
				x
			</div>
	)
}

export default TodoListTemplate