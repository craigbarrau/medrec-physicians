'use strict;'
//Include crypto to generate the physician id
var crypto = require('crypto');

module.exports = function() {
    return {
        physicianList : [],
        /*
         * Save the physician inside the "db".
         */
        save(physician) {
            physician.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
            this.physicianList.push(physician);
            return 1;           
        },
        /*
         * Retrieve a physician with a given id or return all the physicians if the id is undefined.
         */
        find(id) {
            if(id) {
                return this.physicianList.find(element => {
                        return element.id === id;
                    }); 
            }else {
                return this.physicianList;
            }
        },
        /*
         * Delete a physician with the given id.
         */
        remove(id) {
            var found = 0;
            this.physicianList = this.physicianList.filter(element => {
                    if(element.id === id) {
                        found = 1;
                    }else {
                        return element.id !== id;
                    }
                });
            return found;           
        },
        /*
         * Update a physician with the given id
         */
        update(id, physician) {
            var physicianIndex = this.physicianList.findIndex(element => {
                return element.id === id;
            });
            if(physicianIndex !== -1) {
                this.physicianList[physicianIndex].FullName = physician.FullName;
                this.physicianList[physicianIndex].MedicalSpeciality = physician.MedicalSpeciality;
                return 1;
            }else {
                return 0;
            }
        }       
    }
};  