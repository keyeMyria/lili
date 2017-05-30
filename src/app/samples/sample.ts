export interface ISample {
    sample_id: number,
    study_id: number,
    collab_sample_id: number,
    orig_collab_samp_id: number,
    collect_start_date: string,
    collect_end_date: string,
    samp_desc: string,
    samp_vol_filt: number,
    filter_type: number,
    collect_start_time: string,
    collect_end_time: string,
    filt_bornon_date: string,
    study_site_name:string,
    study_site_id:string,
    sampler_name:  string,
    sample_notes: string,
    imr:number,
    fmr:number,
    units:string,
    sample_type:number,
    sample_loc_type:number,
    samp_env_type:number,
    water_type:number,
    init_vol:number,
    tvs_units:string,
    tvs_stage: number,
    tvs: number,
    tvs_liters:number,
    tvs_calc:number,
    tvs_stage_calc:number,
    matrix: string,
    filter_flag: string,
    secondary_conc_flag: string,
    insert_date:string,
    insert_user:string,
    update_date:string,
    update_user:string,
    arrive_date:string,
    arrive_notes:string,
    elute_date:string,
    elute_notes:string,
    tech_init:string,
    air_subsample_vol_ml:number,
    vol_post_dilution_ul:number,
    pump_rate: number
}