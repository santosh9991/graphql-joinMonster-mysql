const graphql = require('graphql');
const {

  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLID
} = graphql;
const CpuType = new GraphQLObjectType({
  name:'servers',
  sqlTable:'cpu',
  uniqueKey:'hostname',
  fields:() => ({
    sys_name:{
      type:GraphQLString,},
    dns:{type:GraphQLString,},
    status:{type:GraphQLString,},
    in_svc:{type:GraphQLString,},
    ito_managed:{type:GraphQLString,},
    machine_type:{type:GraphQLString,},
    op_sys_type:{ type:GraphQLString,},
    alias:{type:GraphQLString,},
    prev_sys_name:{type: GraphQLString,},
    prim_handle:{type: GraphQLString,},
    trust_level:{type: GraphQLString,},
    sys_class:{type: GraphQLString,},
    data_comm_network:{type:GraphQLString,},
    vendor:{type: GraphQLString,},
    model: {type: GraphQLString,},
    op_sys: {type:GraphQLString},
    rel:{type: GraphQLString,},
    patch_level:{type: GraphQLString,},
    patched_date:{type: GraphQLString,},
    wan_access:{type: GraphQLString,},
    network_type:{type: GraphQLString,},
    network_tier:{type: GraphQLString,},
    serial_no:{type: GraphQLString},
    dispose_date:{type: GraphQLString,},
    application:{type: GraphQLString,},
    amity:{type: GraphQLString,},
    patrol:{type: GraphQLString,},
    conv_sched:{type: GraphQLString,},
    conv_complete:{type: GraphQLString,},
    comments:{type: GraphQLString,
    },
    mtce_vendor:{type: GraphQLString,},
    contract_no:{type: GraphQLString,},
    mtce_supplev:{type: GraphQLString,},
    mtce_y_or_m:{type: GraphQLString,},
    mtce_cov:{type: GraphQLString,},
    mtce_expire:{type: GraphQLString,},
    warranty_period:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['warranty_period']}},
    mtceCost:{type: GraphQLInt,
    resolve:(CpuType)=>{return CpuType['mtce_cost']}},
    swmtce_cost:{type: GraphQLInt,
    resolve:(CpuType)=>{return CpuType['swmtce_cost']}},
    ptymtce_cost:{type: GraphQLInt,
    resolve:(CpuType)=>{return CpuType['ptymtce_cost']}},
    d1_needed:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['d1_needed']}},
    d1_start:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['d1_start']}},
    d1_retire:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['d1_retire']}},
    d1_comments:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['d1_comments']}},
    saUid:{type: GraphQLString,
    sqlColumn:'sa_suitsid'},
    sec_suitsid:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['sec_suitsid']}},
    location_cd:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['location_cd']}},
    subsidiary:{type: GraphQLString,},
    market_area:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['market_area']}},
    room_floor:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['room_floor']}},
    tool_kit_in:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['tool_kit_in']}},
    security_soft:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['security_soft']}},
    sec_soft_install:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['sec_soft_install']}},
    sec_admin:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['sec_admin']}},
    securid:{type: GraphQLString,},
    secureid_percent:{type: GraphQLInt,
    resolve:(CpuType)=>{return CpuType['secureid_percent']}},
    auth_server:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['auth_server']}},
    sw908_comp:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['sw908_comp']}},
    sw908_submitted:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['sw908_submitted']}},
    sw908_due:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['sw908_due']}},
    sw908_exclude:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['sw908_exclude']}},
    exclude_Date:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['exclude_Date']}},
    sw908_ex_reason:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['sw908_ex_reason']}},
    exclude_by_whom:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['exclude_by_whom']}},
    security_scan:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['security_scan']}},
    scanned_by:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['scanned_by']}},
    tcpwrappers_loaded:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['tcpwrappers_loaded']}},
    sbcuid_percent:{type: GraphQLInt,
    resolve:(CpuType)=>{return CpuType['sbcuid_percent']}},
    ssh_loaded:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['ssh_loaded']}},
    trust_certified:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['trust_certified']}},
    sec_comments:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['sec_comments']}},
    cpu_model:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['cpu_model']}},
    cpu_installed:{type: GraphQLInt,
    resolve:(CpuType)=>{return CpuType['cpu_installed']}},
    tpm:{type: GraphQLInt,},
    disk_storage:{type: GraphQLString,
    resolve:(CpuType)=>{return CpuType['disk_storage']}},
    memory:{type: GraphQLString,
      },
    no_tape_drive:{type: GraphQLInt,
    resolve:(CpuType)=>{
      return CpuType['no_tape_drive']}},
    no_cdrom_drive:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['no_cdrom_drive']}},
    last_recovery_test_date:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['last_recovery_test_date']}},
    date_verified:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['date_verified']}},
    sys_script_update:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['sys_script_update']}},
    sys_script_action:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['sys_script_action']}},
    add_suits:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['add_suits']}},
    addDate:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['add_date']}},
    updateSuits:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['update_suits']}},
    updateDate:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['update_date']}},
    prodComptotal:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['prod_comptotal']}},
    prodFunctotal:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['prod_functotal']}},
    nslookup:{type: GraphQLString,},
    secPatchBundle:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['sec_patch_bundle']}},
    secExceptText:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['sec_except_text']}},
    hostid:{type: GraphQLString,},
    cpuWordSize:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['cpu_word_size']}},
    cpuSpeed:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['cpu_speed']}},
    instructionSet:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['instruction_set']}},
    assetCenterTag:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['asset_center_tag']}},
    enterprise:{type: GraphQLString,},
    mrd:{type: GraphQLString,},
    perfRunqLimit:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['perf_runq_limit']}},
    perfGlobalcpuLimit:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['perf_globalcpu_limit']}},
    perfCpuWaitLimit:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['perf_cpuwait_limit']}},
    perfSwaputilLimit:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['perf_swaputil_limit']}},
    perfPageoutLimit:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['perf_pageout_limit']}},
    perfPagescanLimit:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['perf_pagescan_limit']}},
    perfDiskbusyLimit:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['perf_diskbusy_limit']}},
    systemEdge:{type: GraphQLString,
      resolve:(CpuType)=>{
        return CpuType['system_edge']}},
    vpmo:{type: GraphQLString,},
    dskTotalScsi:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_total_scsi']}},
    dskTotalSsa:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_total_ssa']}},
    dskTotalHds:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_total_hds']}},
    dskTotalEmc:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_total_emc']}},
    dskTotalOther:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_total_other']}},
    dskTotalUsed:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_total_used']}},
    dskRedundant:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_redundant']}},
    dskUserUsed:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_user_used']}},
    dskTotalFree:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_total_free']}},
    dskUserAvail:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_user_avail']}},
    dskVgDefined:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_vg_defined']}},
    dskUndefSpace:{type: GraphQLInt,
      resolve:(CpuType)=>{
        return CpuType['dsk_undef_space']}},
        hostname:{type: GraphQLString,},

            exceDir:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['exce_dir']}},
            vp:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['vp']}},
            globalStatus:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['global_status']}},
            impact272:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['impact_272']}},
            wlm:{type: GraphQLString,},
            readiness:{type: GraphQLInt,},
            parentCpu:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['parent_cpu']}},
            physicalCpu:{type: GraphQLFloat,
              resolve:(CpuType)=>{
                return CpuType['physical_cpu']}},
            acTagUpdate:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['ac_tag_update']}},
            locationSrcCd:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['location_src_cd']}},
            locationUpdate:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['location_update']}},
            cmdbUpdate:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['cmdb_update']}},
            serverId:{type: GraphQLInt,
              resolve:(CpuType)=>{
                return CpuType['server_id']}},
            workgroup:{type: GraphQLString,},
            dedicatedShared:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['dedicated_shared']}},
            projectType:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['project_type']}},
            eoslComments:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['eosl_comments']}},
            leaseEndDate:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['lease_end_date']}},
            room:{type: GraphQLString,},
            floor:{type: GraphQLString,},
            grid:{type: GraphQLString,},
            slot:{type: GraphQLString,},
            edUid:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['ed_uid']}},
            decommUid:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['decomm_uid']}},
            availabilityZone:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['availability_zone']}},
            archiveBit:{type: GraphQLFloat,
              resolve:(CpuType)=>{
                return CpuType['archive_bit']}},
            archiveDate:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['archive_date']}},
            sysTz:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['sys_tz']}},
            lastSysReboot:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['last_sys_reboot']}},
            selfSupport:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['self_support']}},
            mvmScanExclude:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['mvm_scan_exclude']}},
            userAccMgt:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['user_acc_mgt']}},
            hyperthreads:{type: GraphQLInt,},
            sockets:{type: GraphQLInt,},
            threads:{type: GraphQLInt,},
            clusterName:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['cluster_name']}},
            farmName:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['farm_name']}},
            virtualcenter_name:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['virtualcenter_name']}},
            vtkDate:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['vtk_date']}},
            vtkVerifier:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['vtk_verifier']}},
            aicType:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['aic_type']}},
            aicZone:{type: GraphQLString,
               resolve:(CpuType)=>{
                return CpuType['aic_zone']}},
            timeInstatus:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['time_in_status']}},
            d1Machine:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['d1_machine']}},
            ecrt:{type: GraphQLString,},
            ecrtException:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['ecrt_exception']}},
            vpower:{type: GraphQLString,},
            macSeassignment:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['mac_seassignment']}},
            macPlatformStatus:{type: GraphQLString,
              resolve:(CpuType)=>{
                return CpuType['mac_platform_status']}},
            ips:{
              description: "A list of user pay slips ",
              type: new GraphQLList(IpType),
              //sqlJoin will allow us to specify the join constraint
              //on the user and paycheck table
              sqlJoin(cpuTable,ipsTable){
                //variables userTable and PayTable contains user and paycheck PayTable
                //names respectively
                console.log(cpuTable,ipsTable)
                //userTable and PayTable variables gets replaced by user and paycheck
                return `${cpuTable}.sys_name=${ipsTable}.sys_name`
              }
            }
  })
});
const IpType=new GraphQLObjectType({
  name:'ips',
  sqlTable:'ips',
  uniqueKey:['sys_name','dns','mac_addr'],
  fields:()=>({
sys_name:{type:GraphQLString,},
dns:{type:GraphQLString,},
ip_address:{type:GraphQLString,},
slot_loc:{type:GraphQLString,},
device_nm:{type:GraphQLString,},
device_status:{type:GraphQLString,},
primary_ind:{type:GraphQLString,},
mac_addr:{type:GraphQLString,},
ntwk_transport_nm:{type:GraphQLString,},
hostname:{type:GraphQLString,},
ipv6:{type:GraphQLInt,},
archive_bit:{type:GraphQLString,},
archive_date:{type:GraphQLString,},
servers:{
  description: "A list of user pay slips ",
  type: new GraphQLList(CpuType),
  //sqlJoin will allow us to specify the join constraint
  //on the user and paycheck table
  sqlJoin(cpuTable,ipsTable){
    //variables userTable and PayTable contains user and paycheck PayTable
    //names respectively
    console.log(cpuTable,ipsTable)
    //userTable and PayTable variables gets replaced by user and paycheck
    return `${cpuTable}.sys_name=${ipsTable}.sys_name`
  }
}
})
});
const HardwareType = new GraphQLObjectType({
  name:'hardware',
  sqlTable: "hardware",
  uniqueKey: 'hdw_id',
  fields:() => ({
    sys_name:{type:GraphQLString},
    dns:{type:GraphQLString,},
    hdw_id:{type:GraphQLInt,
    resolve:(HardwareType)=>{return HardwareType['hdw_id']}},
    i_source:{type:GraphQLString,
    resolve:(HardwareType)=>{return HardwareType['i_source']}},
    hw_type:{type:GraphQLString,
    resolve:(HardwareType)=>{return HardwareType['hw_type']}},
    vendor:{type:GraphQLString,},
    model:{type:GraphQLString,},
    disk_size:{type:GraphQLFloat,
    resolve:(HardwareType)=>{return HardwareType['disk_size']}},
    gb_mb:{type:GraphQLString,
    resolve:(HardwareType)=>{return HardwareType['gb_mb']}},
    quantity:{type:GraphQLInt,},
    description:{type:GraphQLString,},
    add_date:{type:GraphQLString,
    resolve:(HardwareType)=>{return HardwareType['add_date']}},
    add_duits:{type:GraphQLString,
    resolve:(HardwareType)=>{return HardwareType['add_suits']}},
    update_date:{type:GraphQLString,
    resolve:(HardwareType)=>{return HardwareType['update_date']}},
    update_suits:{type:GraphQLString,
    resolve:(HardwareType)=>{return HardwareType['update_suits']}},
    archive_bit:{type:GraphQLFloat,
    resolve:(HardwareType)=>{return HardwareType['archive_bit']}},
    archive_date:{type:GraphQLString,
    resolve:(HardwareType)=>{return HardwareType['archive_date']}},
  }),

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
        console.log(userTable,PayTable)
        //userTable and PayTable variables gets replaced by user and paycheck
        return `${userTable}.userId=${PayTable}.userId`
      }
    }
  }
  )
})
module.exports = {
  UserType,
  PayInformation,
  CpuType,
  // SoftwareType,
   HardwareType,
  // LocationType,
  // MotsApplType,
  // motsHardwareApplType,
  IpType,
  // firewallType
}
