const joinMonster = require('join-monster');
const graphql = require('graphql');
const _ = require('lodash');
const {

  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLID
} = graphql;
//knex is a package used to connect and query the sql databases
var knex = require('knex')({
  client: 'mysql2',
  connection:process.env.localdb
});
const PayInformation = new GraphQLObjectType({
  name:'PayInfo',
  //sqlTable field will map to the table in the mysql table u connected
  sqlTable: 'paycheck',
  //uniqueKey specifies the unique name for each row
  uniqueKey: 'PayCheckId',
  // fields property contains all the type and column names of the sql table mapped
  fields:() => ({
    PayCheckId: {type: GraphQLInt},
    userId:{type: GraphQLInt},
    federalTax:{type:GraphQLFloat},
    datePaid: {type:GraphQLString}
    }
  )
});
const UserType = new GraphQLObjectType({
  name:'User',
  sqlTable: "user",
  uniqueKey: 'userId',
  fields:() => ({
    //if field name is not same as the column name, we must specify the actual
    //column name in the sqlColumn field
    userId:{type:GraphQLInt,
    sqlColumn: 'userId'}
    ,
    firstName:{type:GraphQLString,
    sqlColumn: 'firstName'}
    ,
    lastName:{type:GraphQLString,
    sqlColumn: 'lastName'},
    paycheck:{
      description: "A list of user pay slips ",
      type: new GraphQLList(PayInformation),
      //sqlJoin will allow us to specify the join constraint
      //on the user and paycheck table
      sqlJoin(userTable,PayTable){
        //variables userTable and PayTable contains user and paycheck PayTable
        //names respectively
        //console.log(userTable,PayTable)
        //userTable and PayTable variables gets replaced by user and paycheck
        return `${userTable}.userId=${PayTable}.userId`
      }
    }
  }
  )
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQeryType',
  fields:()=>({
    //users: name of the object which holdes the users data
    users: {
      type: GraphQLList(UserType),
      resolve:(parent,args,context,resolveInfo)=> {
        return joinMonster.default(resolveInfo, {}, sql=>{
          console.log(sql)
          // const a="select userId from user"
          //knex.raw returns an object that holds data as first argument
          return knex.raw(sql).then(rows => rows[0]);
        }, {dialect: 'mysql'})
      }
    }
  })
  });

  module.exports = new GraphQLSchema({
      query:RootQuery
  })
