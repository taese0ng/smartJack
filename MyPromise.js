export const MyPromise = class {
    constructor(executor) {
      this.state = 'wait';
      this.lastCall = [];
      this.methodPromise.bind(this);
      this.setState.bind(this);
  
      try {
        executor(this.resolve.bind(this), this.reject.bind(this));
      } catch (error) {
        this.reject(error);
      }
    }
  
    setState(value, state) {
      if (!(this.state === 'wait')) return;
      if (value instanceof MyPromise) {
        value.then(innerValue => {
          this.value = innerValue;
          this.state = state;
          this.lastCall.forEach(call => call());
        });
      } else {
        this.value = value;
        this.state = state;
        this.lastCall.forEach(call => call());
      }
    }
  
    methodPromise(method, callback) {
      const state='';
      if(method === 'then'){
        state = 'resolved';
      }else{
        state = 'rejected';
      }

      if (this.state === state)
        return new MyPromise(resolve => resolve(callback(this.value)));
  
      if (this.state === 'wait')
        return new MyPromise(resolve => {
          this.lastCall.push(() => resolve(callback(this.value)));
        });
      return this;
    }
  
    resolve(value) {
      this.setState(value, 'resolved');
    }
  
    reject(value) {
      this.setState(value, 'rejected');
    }
  
    then(callback) {
      return this.methodPromise('then', callback);
    }
  
    catch(callback) {
      return this.methodPromise('catch', callback);
    }
  };