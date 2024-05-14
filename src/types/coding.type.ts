export interface SubmissionResponse {
    source_code: string;
    language_id: number;
    stdin?: null;
    expected_output?: null;
    stdout: string;
    status_id: number;
    created_at: string;
    finished_at: string;
    time: string;
    memory: number;
    stderr?: null;
    token: string;
    number_of_runs: number;
    cpu_time_limit: string;
    cpu_extra_time: string;
    wall_time_limit: string;
    memory_limit: number;
    stack_limit: number;
    max_processes_and_or_threads: number;
    enable_per_process_and_thread_time_limit: boolean;
    enable_per_process_and_thread_memory_limit: boolean;
    max_file_size: number;
    compile_output?: null;
    exit_code: number;
    exit_signal?: null;
    message?: null;
    wall_time: string;
    compiler_options?: null;
    command_line_arguments?: null;
    redirect_stderr_to_stdout: boolean;
    callback_url?: null;
    additional_files?: null;
    enable_network: boolean;
    status: Status;
    language: Language;
    executed_time: Date;
}

export interface Status {
    id: number;
    description: string;
}
export interface Language {
    id: number;
    name: string;
}
