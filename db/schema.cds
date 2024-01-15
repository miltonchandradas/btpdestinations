namespace demo;

using {cuid} from '@sap/cds/common';

entity Employees : cuid {
    name : String;
    email: String;
    department: String;
}
