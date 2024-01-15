using {demo} from '../db/schema';

@path: 'service/btp'
service BTPService @(requires: 'authenticated-user') {

    entity Employees @(restrict : [
        {
            grant : ['*'],
            to    : ['DestinationsManager']
        }
    ]) as projection on demo.Employees;

    function getApplications() returns String;
    function getUsers() returns String;
}
