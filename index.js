// base64-esque characters mixed randomly
const mapping = 'tBarAi9bDE5Jp8T1MnmFk3uVOUcWq4jI-osHPNLZCgRd70ylKGYvXQhxefw2_S6z';

export const shorten = uuid => {
	if (typeof uuid != 'string') {
		throw new Error('UUID is not a string');
	}
	
	if (uuid.length != 36) {
		throw new Error('String is not an UUID');
	}
	
	let bits = '';
	
	for (let characterIndex = 0; characterIndex < uuid.length;) {
		if (uuid[characterIndex] == '-') {
			characterIndex++;
		} else {
			bits += parseInt(uuid.substring(characterIndex, characterIndex + 2), 16).toString(2).padStart(8, '0');
			
			characterIndex += 2;
		}
	}
	
	let mini = '';
	
	while (bits.length) {
		mini += mapping[parseInt(bits.substring(0, 6), 2)];
		bits = bits.substring(6);
	}
	
	return mini;
};

export const expand = micro => {
	if (typeof micro != 'string') {
		throw new Error('MicroUUID is not a string');
	}
	
	if (micro.length != 22) {
		throw new Error('String is not a MicroUUID');
	}
	
	let bits = '';
	
	for (let character of micro) {
		bits += mapping.indexOf(character).toString(2).padStart(6, '0');
	}
	
	let uuid = '';
	
	for (let bitIndex = 0; bitIndex < bits.length - 8; bitIndex += 8) {
		uuid += parseInt(bits.substring(bitIndex, bitIndex + 8), 2).toString(16).padStart(2, '0');
		
		
		if (bitIndex == 24 || bitIndex == 40 || bitIndex == 56 || bitIndex == 72) {
			uuid += '-';
		}
	}
	
	return uuid;
};
