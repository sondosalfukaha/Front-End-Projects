let Tasker = {
    construct:function(){
        this.selectElements();
        this.bindEvents();
        this.scanList();
    },
    selectElements: function(){
        this.taskInput = document.getElementById("task-input");
        this.taskList =document.getElementById("lists");
        this.task = this.taskList.children;
        this.btn = document.getElementById("add-task");
        this.errorM = document.getElementById("error");
    },
    bulidTask: function(){
        let taskItem, taskcheck, taskBtn, taskValue, taskTrash;
        taskItem = document.createElement("li");
        taskItem.setAttribute("class","task");

        taskcheck = document.createElement("input");
        taskcheck.setAttribute("type","checkbox");

        taskValue = document.createTextNode(this.taskInput.value);

        taskBtn = document.createElement("button");

        taskTrash = document.createElement("i");
        taskTrash.setAttribute("class","fa fa-trash");
        
        taskBtn.appendChild(taskTrash);

        taskItem.appendChild(taskcheck);
        taskItem.appendChild(taskValue);
        taskItem.appendChild(taskBtn);
        this.taskList.appendChild(taskItem);
    },
    error: function(){
        this.errorM.style.display="block";
    },
    addTask:function(){
        let taskValue = this.taskInput.value;
        this.errorM.style.display = "none";
        if(taskValue === ""){
            this.error();
        }
        else{
            this.bulidTask();
            this.taskInput.value = "";
            this.scanList();
        }
    },
    enterKey: function(event){
        if(event.keyCode === 13 || event.which === 13){
            this.addTask();
        }
    },
    bindEvents: function(){
        this.btn.onclick = this.addTask.bind(this);
        this.taskInput.onkeypress = this.enterKey.bind(this);
    },
    scanList:function(){
        let taskItem,checkBox,deleteBtn;
        for(i =0;i<this.task.length ; i++){
            taskItem = this.task[i];

            checkBox = taskItem.getElementsByTagName("input")[0];
            deleteBtn = taskItem.getElementsByTagName("button")[0];

            checkBox.onclick = this.completeTask.bind(this,taskItem,checkBox);
            deleteBtn.onclick = this.deleteTask.bind(this,i);

        }
    },
    
    deleteTask:function(i){
        this.task[i].remove();
        this.scanList();
    },
    completeTask: function(taskItem,checkBox){
        if(checkBox.checked){
            taskItem.className = "task completed"
        }
        else{
            this.incompleteTask(taskItem);
        }
    },
    incompleteTask: function(taskItem){
        taskItem.className = "task";
    }
};