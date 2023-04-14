function formValidation(){
	let name = document.querySelector('#name').value.trim();
	let lname = document.querySelector('#lname').value.trim();
	let email = document.querySelector('#email').value.trim();
	let passid = document.querySelector('#passid').value.trim();
	let phone = document.querySelector('#phone').value.trim();
    let dob = document.querySelector('#dob').value.trim();
	let fname = document.querySelector('#fname').value.trim();
	let mname = document.querySelector('#mname').value.trim();
    let cour = document.querySelector('#cour').value.trim();
	let gen = document.querySelector('#gen').value.trim();
    let sta = document.querySelector('#sta').value.trim();
	let dis = document.querySelector('#dis').value.trim();
	let city = document.querySelector('#city').value.trim();
    let  area=document.querySelector('#area').value.trim();
	let pin= document.querySelector('#pin').value.trim();
    let lang= document.querySelector('#lang').value.trim();




	
	if (name === "") {
		alert("Please enter your name");
		
		return false;
	  }
    if (lname == '') {
		alert('Please enter your Lastname.');
		return;
	}

	
	if (email == '') {
		alert('Please enter your email address.');
		return;
	}

	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(email)) {
		alert('Please enter a valid email address.');
		return;
	}

    if (passid =='') {
		alert('Please enter your Password.');
		return;
    }
	
	if (phone =='') {
		alert('Please enter your phone number.');
		return;
	}

	let phoneRegex = /^\d{10}$/;

	if (!phoneRegex.test(phone)) {
		alert('Please enter a valid 10-digit phone number.');
		return;
	}

    if (dob =='') {
		alert('Please enter your dob.');
		return;
	}

    if (fname == '') {
		alert('Please enter the father name.');
		return;
	}

    if (mname === '') {
		alert('Please enter the mother name.');
		return;
	}

	
	if (cour =='') {
		alert('Please select a course.');
		return;
	}

	
	if (gen =='') {
		alert('Please select the gender.');
		return;
	}
    if (sta == '') {
		alert('Please select the state');
		return;
    }
        if (dis == '') {
            alert('Please enter the district name.');
            return;
        }
            if (city == '') {
                alert('Please enter the city name.');
                return;
            }
                if (area =='') {
                    alert('Please enter the area name.');
                    return;
                }
                if (pin =='') {
                    alert('Please enter the pin.');
                    return;
                }

                if (lang =='') {
                    alert('Please select the language.');
                    return;
                }

	console.log('Name:', name);
	console.log('Lname:', lname);
	console.log('Email:', email);
	console.log('Password:', passid);
	console.log('Phone:', phone);
    console.log('Dob', dob);
	console.log('Fname:', fname);
    console.log('Mname:', mname);
	console.log('Course:', cour);
    console.log('Gender:', gen);
	console.log('State:', sta);
    console.log('District:', dis);
	console.log('City:', city);
    console.log('Area:', area);
	console.log('Pin:', pin);
    console.log('Language:', lang);

	
	
	
};
