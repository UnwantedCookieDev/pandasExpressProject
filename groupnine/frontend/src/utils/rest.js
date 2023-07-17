export  async function getCustomers() {
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("/customers", myInit);
    return promise.then((response) => {
      return response.text();
    });
  }
  
  export async  function deleteCustomer(customer) {
    let url = (customer.id) ? "/customers/" + customer.id : "/customers/" + customer.id;
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'DELETE', headers: myHeaders, mode: 'cors' };
    let promise = fetch(url , myInit);
    return promise.then((response) => {
      return response.text();
    });
  }
  
  export async  function addCustomer(customer) {
    let url = "/customers/";
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    delete customer.id;
    let body = JSON.stringify(customer);
    var myInit = {
      method: 'POST',
      body: body,
      headers: myHeaders,
      mode: 'cors'
    };
    let promise = fetch(url, myInit);
    return promise.then((response) => {
      return response.text();
    });
  
  }
  
  export  async function updateCustomer(customer) {
    let url = (customer.id) ? "/customers/" + customer.id : "/customers/" + customer.id;
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    let body = JSON.stringify(customer);
    var myInit = {
      method: 'PUT',
      body: body,
      headers: myHeaders,
      mode: 'cors'
    };
    let promise = fetch(url, myInit);
    return promise.then((response) => {
      return response.text();
    });
  
  }

  export  async function getProducts() {
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("/products", myInit);
    const response = await promise;
    return await response.text();
  }