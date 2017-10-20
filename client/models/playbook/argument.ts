export class Argument {
	/**
	 * Name of the argument in question
	 */
	name: string;
	/**
	 * Serves a dual purpose: if reference is unspecified, this is the static value of the input.
	 * If reference is specified, this is an optional "path" through the referenced step's output JSON.
	 * (e.g. given an output { status: 'Success', result: 'something' }, passing 'result' as the value would grab 'something' from the output JSON.
	 */
	value: any;
	/**
	 * Reference to a Step UID to use the output of
	 */
	reference: string;
}