var customNodeUI = {
	jsonObj: {},
	elementId: null,
	gridObj: [],
	gridHeadings: [{
		"task_name": "Task Name",
		"task_description": "Task Description",
		"status": "Task Status",
		"task_startdate": "Task Start Name",
		"task_enddate": "Task End Name"
	}],
	refreshUI: function (containerId) {
		this.generateGrid(containerId);
	},
	addFields: function (containerId) {
		// Number of inputs to create
		var number = 6;
		
		var rowdivContiner = document.createElement("div");
		rowdivContiner.setAttribute('class', 'addbtn slds-line--spaceing');
		containerId.prepend(rowdivContiner);
		rowdivContiner.innerHTML = '<button type="button" class="slds-button slds-button--primary" data-toggle="modal" data-target="#myModal">Add</button><div class="modal fade" id="myModal" role="dialog"><div class="modal-dialog" style="position: absolute;left: 20%;"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Tasks</h4></div><div class="modal-body" id="task-body" style="max-height:300px;overflow-y:auto;"></div><div class="modal-footer"><button type="button" class="slds-button slds-button--primary" onclick="customNodeUI.addRow()">Save</button>&nbsp;<button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
		var container = document.getElementById("task-body");
		for (i = 0; i < number; i++) {			

			var rowdivContiner = document.createElement("div");
			rowdivContiner.setAttribute('class', 'slds-grid slds-gutters slds-leftfloat-lblicon slds-line--spaceing');
			container.appendChild(rowdivContiner);

			// Append a node with a random text
			var divContiner = document.createElement("div");
			divContiner.setAttribute('class', 'slds-col slds-size_6-of-12');
			rowdivContiner.appendChild(divContiner);

			var fieldDivContiner = document.createElement("div");
			fieldDivContiner.setAttribute('class', 'slds-form-element slds-m-top--small');
			divContiner.appendChild(fieldDivContiner);
			
			var input = '';
			if(i == 0){

				var label = document.createElement("label");
				label.innerHTML = "Task ID";
				label.setAttribute('class', 'slds-form-element__label');
				fieldDivContiner.appendChild(label);

				input = document.createElement("input");
				input.id = "task_id";
				input.name = "task_id";
				input.type = "text";
				input.onkeyup = inputChange;
				input.setAttribute('class', 'slds-input');
			} else if(i == 1){

				var label = document.createElement("label");
				label.innerHTML = "Task Status";
				label.setAttribute('class', 'slds-form-element__label');
				fieldDivContiner.appendChild(label);

				input = document.createElement("input");
				input.id = "status";
				input.name = "status";
				input.style.marginLeft='10px';
				input.onkeyup = inputChange;
				input.type = "checkbox";
			}else if(i == 2){

				var label = document.createElement("label");
				label.innerHTML = "Task Name";
				label.setAttribute('class', 'slds-form-element__label');
				fieldDivContiner.appendChild(label);

				input = document.createElement("input");
				input.id = "task_name";
				input.name = "task_name";
				input.type = "text";
				input.onkeyup = inputChange;
				input.setAttribute('class', 'slds-input');
			} else if(i == 3){

				var label = document.createElement("label");
				label.innerHTML = "Task Description";
				label.setAttribute('class', 'slds-form-element__label');
				fieldDivContiner.appendChild(label);
				input = document.createElement("input");
				input.id = "task_description";
				input.name = "task_description";
				input.type = "text";
				input.onkeyup = inputChange;
				input.setAttribute('class', 'slds-input');
			} else if(i == 4){

				var label = document.createElement("label");
				label.innerHTML = "Start Date";
				label.setAttribute('class', 'slds-form-element__label');
				fieldDivContiner.appendChild(label);
				input = document.createElement("input");
				input.id = "task_startdate";
				input.name = "task_startdate";
				input.type = "date";
				input.onchange = inputChange;
				input.setAttribute('class', 'slds-input');
			}else if(i == 5){

				var label = document.createElement("label");
				label.innerHTML = "End Date";
				label.setAttribute('class', 'slds-form-element__label');
				fieldDivContiner.appendChild(label);
				input = document.createElement("input");
				input.id = "task_enddate";
				input.name = "task_enddate";
				input.type = "date";
				input.onchange = inputChange;
				input.setAttribute('class', 'slds-input');
			}
			input.setAttribute('autocomplete', 'off');
			tjsonobj = this.jsonObj;
			fieldDivContiner.appendChild(input);
		}
	},
	generateTableHead: function(table, data, headings) {
		let thead = table.createTHead();
		let row = thead.insertRow();
		for (let key of data) {
		  let th = document.createElement("th");
		  th.innerHTML = headings[key];
		  row.appendChild(th);
		}
	},
	generateTable: function(table, data, headings) {
		for (let element of data) {
		  let row = table.insertRow();
		  for (key in element) {
			let cell = row.insertCell();
			let text = document.createTextNode(element[key]);
			cell.appendChild(text);
		  }
		}
	},
	generateGrid: function (containerId) {
		this.elementId = containerId;
		// Container <div> where dynamic content will be placed
		var container = document.getElementById(containerId);
		// Clear previous contents of the container
		while (container.hasChildNodes()) {
			container.removeChild(container.lastChild);
		}
		var rowdivContiner = document.createElement("div");
		rowdivContiner.setAttribute('class', 'slds-grid slds-gutters slds-leftfloat-lblicon slds-line--spaceing');
		container.appendChild(rowdivContiner);

		// Append a node with a random text
		var divContiner = document.createElement("div");
		divContiner.setAttribute('class', 'slds-col slds-size_12-of-12');
		rowdivContiner.appendChild(divContiner);

		var divContiner1 = document.createElement("table");
		divContiner1.setAttribute('class', 'table slds-line--spaceing');
		divContiner1.setAttribute('id', 'gridTable');
		divContiner.appendChild(divContiner1);

		let table = document.getElementById("gridTable");
		let data = Object.keys(this.gridHeadings[0]);
		this.generateTableHead(table, data, this.gridHeadings[0]);
		this.generateTable(table, this.gridObj, this.gridHeadings[0]);
		this.addFields(container)
	},
	addRow(){
		console.log(this.jsonObj);
		this.gridObj.push(this.jsonObj);
		this.jsonObj = {};
		this.refreshUI(this.elementId);
		$("#myModal").modal('hide');

	}
}
var inputChange = function () {
	customNodeUI.jsonObj[this.name] = this.value;
}