export interface ISample {
    id: number,
    sample_type: number,
    matrix_type: number,
    filter_type: number,
    study: number,
    study_site_name:string,
    collaborator_sample_id: string
    sampler_name:  string
    sample_notes: string
    sample_description: string
    arrival_date:string
    arrival_notes:string
    collection_start_date: string
    collection_start_time: string
    collection_end_date: string
    collection_end_time: string
    meter_reading_initial:number
    meter_reading_final:number
    meter_reading_unit:number
    total_volume_sampled_initial: number
    total_volume_sampled_unit_initial:number,
    total_volume_sampled:number,
    sample_volume_initial:number,
    sample_volume_filtered:number,
    filter_born_on_date:string,
    filter_flag: boolean,
    secondary_concentration_flag: boolean,
    elution_date:string,
    elution_notes:string,
    technician_initials:string,
    air_subsample_volume: number,
    post_dilution_volume: number,
    pump_flow_rate: number,
    insert_date: string,
    insert_user:string,
    update_date: string,
    update_user:string
}
