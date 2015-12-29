export class App {
	message: string = 'Welcome to Aurelia!';

	firstName: string = 'John';
	lastName: string = 'Doe';

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	submit() {
		alert(`Welcome, ${this.fullName}!`);
	}
}
