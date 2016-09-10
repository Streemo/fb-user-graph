import { HTTP } from "meteor/http";
import { Meteor } from "meteor/meteor";
import { encode } from "querystring";

export class UserGraph {
	constructor(version){
		this._root = "https://graph.facebook.com/v"+version+"/";
	}
	get(user, fields){
		let fb = user.services;
		if (!fb){
			throw new Meteor.Error("Must include the 'services' field.")
		}
		fb = fb.facebook;
		if (!fb){
			throw new Meteor.Error("User did not sign up through facebook.");
		}
		const query = "?"+encode({access_token: fb.accessToken, fields:fields.join(",")})
		return HTTP.get(this._root+fb.id+query).data;
	}
}