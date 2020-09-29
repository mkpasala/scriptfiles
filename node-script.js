var customNodeUI = {
	jsonObj: {},
	outJSON: function () {
		return this.jsonObj;
	},
	setJSON: function (inputJson) {
		console.log("setJSON" , inputJson)
		this.jsonObj = inputJson;
		keys = Object.keys(this.jsonObj);
		for (var key in  inputJson) {
			document.getElementById(key).value = customNodeUI.jsonObj[key] = inputJson[key];
		}
	},

	refreshUI: function (containerId) {
		this.addFields(containerId);
	},

	addFields: function (containerId) {
		// Number of inputs to create
		var number = 7;
		// Container <div> where dynamic content will be placed
		var container = document.getElementById(containerId);
		// Clear previous contents of the container
		while (container.hasChildNodes()) {
			container.removeChild(container.lastChild);
		}
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
				input.setAttribute('class', 'slds-input');
			}else if(i == 5){

				var label = document.createElement("label");
				label.innerHTML = "End Date2";
				label.setAttribute('class', 'slds-form-element__label');
				fieldDivContiner.appendChild(label);
				input = document.createElement("input");
				input.id = "task_enddate";
				input.name = "task_enddate";
				input.type = "date";
				input.setAttribute('class', 'slds-input');
			}else if(i == 6){
				var label = document.createElement("label");
				label.innerHTML = "Task type";
				label.setAttribute('class', 'slds-form-element__label');
				fieldDivContiner.appendChild(label);
				input = document.createElement("input");
				input.id = "task_type";
				input.name = "task_type";
				input.type = "text";
				input.setAttribute('class', 'slds-input');
			}
			input.setAttribute('autocomplete', 'off');
			tjsonobj = this.jsonObj;
			input.onkeyup = inputChange;
			fieldDivContiner.appendChild(input);
		}
	}
}
var inputChange = function () {
	customNodeUI.jsonObj[this.name] = this.value;
}
customNodeUI.addFields('poctest');