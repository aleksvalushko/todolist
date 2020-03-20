(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,n){t.exports=n(230)},105:function(t,e,n){},169:function(t,e,n){},170:function(t,e,n){},171:function(t,e,n){},172:function(t,e,n){},173:function(t,e,n){},191:function(t,e,n){},230:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(39),i=n.n(s);n(105),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(5),c=n(63),l=n(6),d="TodoList/Reducer/ADD_TASK",u={todolists:[]},p=n(233),f=Object(r.b)({reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TodoList/Reducer/ADD_TODOLIST":return Object(l.a)({},t,{todolists:[].concat(Object(c.a)(t.todolists),[e.newTodoList])});case"TodoList/Reducer/SET_TODOLISTS":return Object(l.a)({},t,{todolists:e.todolists.map(function(t){return Object(l.a)({},t,{tasks:[]})})});case"TodoList/Reducer/DELETE_TODOLIST":return Object(l.a)({},t,{todolists:t.todolists.filter(function(t){return t.id!==e.todolistId})});case d:return Object(l.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(l.a)({},t,{tasks:[].concat(Object(c.a)(t.tasks),[e.newTask])}):t})});case"TodoList/Reducer/SET_TASKS":return Object(l.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(l.a)({},t,{tasks:e.tasks}):t})});case"TodoList/Reducer/CHANGE_TASK":return Object(l.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(l.a)({},t,{tasks:t.tasks.map(function(t){return t.id===e.taskId?Object(l.a)({},t,{},e.obj):t})}):t})});case"TodoList/Reducer/CHANGE_TODOLIST":return Object(l.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(l.a)({},t):t})});case"TodoList/Reducer/DELETE_TASK":return Object(l.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(l.a)({},t,{tasks:t.tasks.filter(function(t){return t.id!==e.taskId})}):t})});default:return t}},form:p.a}),m=Object(r.c)(f);window.store=m;var T=m,k=n(16),h=n(8),b=n(10),v=n(9),E=n(11),O=(n(169),n(40)),g=(n(170),n(171),n(41)),j=n.n(g),S=function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(b.a)(this,Object(v.a)(e).call(this,t))).state={editMode:!1,title:n.props.task.title},n.activateEditMode=function(){n.setState({editMode:!0})},n.deactiveEditMode=function(){n.props.changeTitle(n.props.task.id,n.state.title),n.setState({editMode:!1})},n.onIsDoneChanged=function(t){var e=t.currentTarget.checked?2:0;n.props.changeIsDoneStatus(n.props.task.id,e)},n.onTitleChanged=function(t){n.setState({title:t.currentTarget.value})},n.onDeleteTask=function(){n.props.deleteTask(n.props.task.id)},n.render=function(){var t=n.props.task.status?"done":"";return o.a.createElement("div",{className:"todoListTask"},o.a.createElement("input",{type:"checkbox",id:"check",checked:2===n.props.task.status,onChange:n.onIsDoneChanged}),o.a.createElement("div",{className:"todoListTaskItem"},o.a.createElement("div",null,n.state.editMode?o.a.createElement("input",{onBlur:n.deactiveEditMode,onChange:n.onTitleChanged,autoFocus:!0,value:n.state.title}):o.a.createElement("span",{onClick:n.activateEditMode,className:t},n.props.task.title)),o.a.createElement("button",{className:"todoListTaskDelete",onClick:n.onDeleteTask},o.a.createElement("img",{src:j.a,alt:"basket"}))))},n}return Object(E.a)(e,t),e}(o.a.Component),L=function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(b.a)(this,Object(v.a)(e).call(this,t))).render=function(){var t=n.props.tasks.map(function(t){return o.a.createElement(S,{key:t.id,task:t,changeIsDoneStatus:n.props.changeIsDoneStatus,changeTitle:n.props.changeTitle,deleteTask:n.props.deleteTask})});return o.a.createElement("div",null,t)},n}return Object(E.a)(e,t),e}(o.a.Component),C=(n(172),function(t){function e(){var t,n;Object(h.a)(this,e);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(b.a)(this,(t=Object(v.a)(e)).call.apply(t,[this].concat(s)))).state={isHidden:!1},n.onAllFilterClick=function(){n.props.changeFilter("All")},n.onComplitedFilterClick=function(){n.props.changeFilter("Completed")},n.onActiveFilterClick=function(){n.props.changeFilter("Active")},n.onHideFilterClick=function(){n.setState({isHidden:!0})},n.onShowFilterClick=function(){n.setState({isHidden:!1})},n.render=function(){var t="All"===n.props.filterValue?"filterActive":"",e="Completed"===n.props.filterValue?"filterActive":"",a="Active"===n.props.filterValue?"filterActive":"";return o.a.createElement("div",{className:"todoList-footer"},!n.state.isHidden&&o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){n.onAllFilterClick()},className:t},"All"),o.a.createElement("button",{onClick:function(){n.onComplitedFilterClick()},className:e},"Completed"),o.a.createElement("button",{onClick:function(){n.onActiveFilterClick()},className:a},"Active")),!n.state.isHidden&&o.a.createElement("span",{onClick:function(){n.onHideFilterClick()}},"hide"),n.state.isHidden&&o.a.createElement("span",{onClick:function(){n.onShowFilterClick()}},"show"))},n}return Object(E.a)(e,t),e}(o.a.Component)),w=function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(b.a)(this,Object(v.a)(e).call(this,t))).state={error:!1,title:""},n.onInputTextChange=function(t){n.setState({error:!1,title:t.currentTarget.value})},n.onAddNewItemTitle=function(){var t=n.state.title;n.setState({title:""}),""===t?n.setState({error:!0}):(n.setState({error:!1}),n.props.addNewTitle(t))},n.onPressEnter=function(t){"Enter"===t.key&&n.onAddNewItemTitle()},n.render=function(){var t=n.state.error?"error":"";return o.a.createElement("div",{className:"todoList-header"},o.a.createElement("div",{className:"todoList-newTaskForm"},o.a.createElement("input",{type:"text",placeholder:"New item name",className:t,onChange:n.onInputTextChange,onKeyPress:n.onPressEnter,value:n.state.title}),o.a.createElement("button",{onClick:function(){n.onAddNewItemTitle()}},"Add")))},n}return Object(E.a)(e,t),e}(o.a.Component),I=(n(173),n(97)),A=n.n(I).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"2a70584b-20f7-4ff5-8c15-684fb9f4be7b"}}),D={createTask:function(t,e){return A.post("/todo-lists/".concat(e,"/tasks"),{title:t})},getTasks:function(t){return A.get("/todo-lists/".concat(t,"/tasks"))},updateTask:function(t,e){return A.put("/todo-lists/tasks",Object(l.a)({},t,{},e))},deleteTask:function(t){return A.delete("/todo-lists/tasks/".concat(t))},deleteTodolist:function(t){return A.delete("/todo-lists/".concat(t))},getTodolists:function(){return A.get("/todo-lists")},createTodolists:function(t){return A.post("/todo-lists",{title:t})},updateTodolist:function(t,e){return A.put("/todo-lists/".concat(t),{title:e})}},N=function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(b.a)(this,Object(v.a)(e).call(this,t))).state={filterValue:"All",nextTaskId:3},n.restoreState=function(){D.getTasks(n.props.id).then(function(t){var e=t.data.items;n.props.setTasks(e,n.props.id)})},n.addTask=function(t){D.createTask(t,n.props.id).then(function(t){var e=t.data.data.item;n.props.addTask(e,n.props.id)})},n.changeFilter=function(t){n.setState({filterValue:t})},n.changeTask=function(t,e){n.props.tasks.forEach(function(a){a.id===t&&D.updateTask(a,e).then(function(a){n.props.changeTask(n.props.id,t,e)})})},n.changeTodolist=function(t,e){D.updateTodolist(n.props.id,e).then(function(t){n.props.changeTodolist(n.props.id,n.props.title)})},n.changeIsDoneStatus=function(t,e){n.changeTask(t,{status:e})},n.changeTitle=function(t,e){n.changeTask(t,{title:e})},n.deleteTask=function(t){D.deleteTask(t).then(function(e){n.props.deleteTask(n.props.id,t)})},n.deleteTodolist=function(){D.deleteTodolist(n.props.id).then(function(t){n.props.deleteTodolist(n.props.id)})},n.render=function(){var t=n.props.tasks,e=void 0===t?[]:t;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"todoList"},o.a.createElement("div",{className:"todoListHeader"},o.a.createElement("div",{className:"todoListTitle"},o.a.createElement("div",{className:"todoListDate"},o.a.createElement("div",{className:"todoListDateWeekday"},"".concat(n.weekDay,", "),o.a.createElement("span",null,n.day)),o.a.createElement("div",{className:"todoListDateMonth"},n.month)),o.a.createElement("button",{onClick:function(){n.deleteTodolist()},className:"todoListDeleteButton"},o.a.createElement("img",{src:j.a,alt:"basket"})))),o.a.createElement(w,{addNewTitle:n.addTask}),o.a.createElement("div",{className:"todoListContent"},o.a.createElement(L,{changeIsDoneStatus:n.changeIsDoneStatus,changeTitle:n.changeTitle,changeTask:n.changeTask,deleteTask:n.deleteTask,tasks:e.filter(function(t){return"All"===n.state.filterValue?2:"Active"===n.state.filterValue?0===t.status:2===t.status})})),o.a.createElement(C,{changeFilter:n.changeFilter,filterValue:n.state.filterValue})))},n}return Object(E.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){this.restoreState(),this.weekDay=(new Date).toLocaleString("ru",{weekday:"long"}),this.day=(new Date).toLocaleString("ru",{day:"numeric"}),this.month=(new Date).toLocaleString("ru",{month:"long"})}}]),e}(o.a.Component),y=Object(k.b)(null,function(t){return{addTask:function(e,n){var a=function(t,e){return{type:d,newTask:t,todolistId:e}}(e,n);t(a)},setTasks:function(e,n){var a=function(t,e){return{type:"TodoList/Reducer/SET_TASKS",tasks:t,todolistId:e}}(e,n);t(a)},changeTask:function(e,n,a){var o=function(t,e,n){return{type:"TodoList/Reducer/CHANGE_TASK",todolistId:t,taskId:e,obj:n}}(e,n,a);t(o)},deleteTodolist:function(e){var n=function(t){return{type:"TodoList/Reducer/DELETE_TODOLIST",todolistId:t}}(e);t(n)},deleteTask:function(e,n){var a=function(t,e){return{type:"TodoList/Reducer/DELETE_TASK",todolistId:t,taskId:e}}(e,n);t(a)},changeTodolist:function(e,n){var a=function(t,e){return{type:"TodoList/Reducer/CHANGE_TODOLIST",todolistId:t,newTodolistTitle:e}}(e,n);t(a)}}})(N),F=function(t){function e(){var t,n;Object(h.a)(this,e);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(b.a)(this,(t=Object(v.a)(e)).call.apply(t,[this].concat(s)))).state={newTodoListId:0},n.restoreState=function(){D.getTodolists().then(function(t){n.props.setTodolists(t.data)})},n.addTodolist=function(t){D.createTodolists(t).then(function(t){var e=t.data.data.item;n.props.addTodolist(e)})},n.render=function(){var t=n.props.todolists.map(function(t){return o.a.createElement(y,{key:t.id,id:t.id,title:t.title,tasks:t.tasks})});return o.a.createElement("div",{className:"item"},o.a.createElement("div",null,o.a.createElement(w,{addNewTitle:n.addTodolist})),o.a.createElement("div",{className:"App"},t))},n}return Object(E.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}}]),e}(o.a.Component),R=Object(k.b)(function(t){return{todolists:t.reducer.todolists}},function(t){return{addTodolist:function(e){var n=function(t){return{type:"TodoList/Reducer/ADD_TODOLIST",newTodoList:t}}(e);t(n)},setTodolists:function(e){var n=function(t){return{type:"TodoList/Reducer/SET_TODOLISTS",todolists:t}}(e);t(n)}}})(F),_=(n(191),n(232)),H=n(231),M=(Object(H.a)({form:"login"})(function(t){return o.a.createElement("form",{onSubmit:t.handleSubmit},o.a.createElement(_.a,{component:"input",name:"login"}),o.a.createElement(_.a,{component:"input",name:"password"}),o.a.createElement(_.a,{component:"input",type:"checkbox",name:"rememberMe"}),o.a.createElement("button",null,"Send"))}),function(t){function e(){var t,n;Object(h.a)(this,e);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(b.a)(this,(t=Object(v.a)(e)).call.apply(t,[this].concat(s)))).render=function(){return o.a.createElement("div",{className:"appWrapper"},o.a.createElement(R,null))},n}return Object(E.a)(e,t),e}(o.a.Component));i.a.render(o.a.createElement(k.a,{store:T},o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},41:function(t,e,n){t.exports=n.p+"static/media/basket.491ecf80.svg"}},[[100,1,2]]]);
//# sourceMappingURL=main.c53f6e62.chunk.js.map