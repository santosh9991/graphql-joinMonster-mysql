const joinMonster = require('join-monster');
const graphql = require('graphql');
const _ = require('lodash');
const types = require('./types');
const {
  UserType,
  PayInformation,
  HardwareType,
  IpType,
  CpuType
} = types;
const SqlString = require('sqlstring');
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
  connection:process.env.local_iedsdb
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQeryType',
  fields:()=>({
    servers:{
      type: GraphQLList(CpuType),
      resolve:(parent,args,context,resolveInfo)=> {
        return joinMonster.default(resolveInfo, {}, sql=>{
          console.log(sql)
          // const a="select userId from user"
          //knex.raw returns an object that holds data as first argument
          return knex.raw(sql+" limit 1000").then(rows => rows[0]);
        }, {dialect: 'mysql'})
      }
    },
    ips:{
      type: GraphQLList(IpType),
      resolve:(parent,args,context,resolveInfo)=> {
        return joinMonster.default(resolveInfo, {}, sql=>{
          console.log(sql)
          // const a="select userId from user"
          //knex.raw returns an object that holds data as first argument
          return knex.raw(sql+" limit 1000").then(rows => rows[0]);
        }, {dialect: 'mysql'})
      }
    },
    hardwares: {
      type: GraphQLList(HardwareType),
      resolve:(parent,args,context,resolveInfo)=> {
        return joinMonster.default(resolveInfo, {}, sql=>{
          console.log(sql)
          // const a="select userId from user"
          //knex.raw returns an object that holds data as first argument
          return knex.raw(sql+" limit 1000").then(rows => rows[0]);
        }, {dialect: 'mysql'})
      }
    },
    hardware: {
      type: GraphQLList(HardwareType),
      args:{
        hdw_id: {type: GraphQLList(GraphQLInt)},
        sys_name: {type: GraphQLList(GraphQLString)},
        dns: {type: GraphQLList(GraphQLString)},
      },
      where:(userTable,args,context)=>{
        console.log(userTable,"sdfa",args);
        var b='';
        var c='';
        d= []
        for(var i in args){
          // console.log(args[i]);
          e = '';
          for(var j in args[i]){
            console.log(args[i][j]);
            if(e){
            e = e+","+'"'+args[i][j]+'"';
          }
            else if(e==''){e = e+'"'+args[i][j]+'"'}

          }
          console.log("e",e);
          b=`${userTable}.${i} in (`+e+`)`;
          d.push(b)
          console.log("sdfafsfafas",b);
        }
        len = d.length
        for(var i in d){
          var temp = d[i];
          if(i===len-2 & len!==2){
            c=c+temp;
          }
          else if(len===2 & i==1){
            c=c+temp
          }
          else if(len==1) {
            c= c+temp
          }
          else {
            c= c+temp+' and '
          }
        }
        // console.log("andds",c);
        return c
      },
      resolve: (parent,args,context,resolveInfo)=>{
        return joinMonster.default(resolveInfo, {}, sql=>{
        console.log(sql);
        // const a="select userId from user"
        //knex.raw returns an object that holds data as first argument
        return knex.raw(sql).then(rows => rows[0]);
      }, {dialect: 'mysql'})
      }
    }

/*

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
    },
    user: {
      type: GraphQLList(UserType),
      args:{
        userId: {type: GraphQLList(GraphQLInt)},
        firstName: {type: GraphQLList(GraphQLString)},
        lastName: {type: GraphQLList(GraphQLString)},
      },
      where:(userTable,args,context)=>{
        console.log(userTable,"sdfa",args);
        var b='';
        var c='';
        d= []
        for(var i in args){
          // console.log(args[i]);
          e = '';
          for(var j in args[i]){
            console.log(args[i][j]);
            if(e){
            e = e+","+'"'+args[i][j]+'"';
          }
            else if(e==''){e = e+'"'+args[i][j]+'"'}

          }
          console.log("e",e);
          b=`${userTable}.${i} in (`+e+`)`;
          d.push(b)
          console.log("sdfafsfafas",b);
        }
        len = d.length
        for(var i in d){
          var temp = d[i];
          if(i===len-2 & len!==2){
            c=c+temp;
          }
          else if(len===2 & i==1){
            c=c+temp
          }
          else if(len==1) {
            c= c+temp
          }
          else {
            c= c+temp+' and '
          }
        }
        // console.log("andds",c);
        return c
      },
      resolve: (parent,args,context,resolveInfo)=>{
        return joinMonster.default(resolveInfo, {}, sql=>{
        console.log(sql);
        // const a="select userId from user"
        //knex.raw returns an object that holds data as first argument
        return knex.raw(sql).then(rows => rows[0]);
      }, {dialect: 'mysql'})
      }
    }
    */
  })
  });

  module.exports = new GraphQLSchema({
      query:RootQuery
  })
