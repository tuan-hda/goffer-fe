import { TbLoader, TbTestPipe, TbTriangleFilled, TbUpload } from 'react-icons/tb';
import { Button } from '../ui/button';
import catchAsync from '@/utils/catchAsync';
import { useState } from 'react';
import { submitService } from '@/services/coding.service';
import useCodingStore from '@/stores/codingStore';
import { shallow } from 'zustand/shallow';
import { encodeBase64 } from 'stream-chat';
import { SubmissionResponse } from '@/types/coding.type';

const Header = () => {
    const [loading, setLoading] = useState(false);
    const [code, config, input, setCurrentTab, setResult] = useCodingStore(
        (state) => [state.code, state.config, state.input, state.setCurrentTab, state.setResult],
        shallow,
    );

    const runCode = () =>
        catchAsync(
            async () => {
                setLoading(true);
                const body = {};
                body.language_id = config.lang.id;
                body.source_code = encodeBase64(code);
                body.stdin = encodeBase64(input);
                console.log('body', body);

                const response = /*await submitService({}); */ {};
                setCurrentTab('output');
                setResult({
                    source_code:
                        'I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=',
                    language_id: 52,
                    stdin: 'SnVkZ2Uw',
                    expected_output: null,
                    stdout: 'aGVsbG8sIEp1ZGdlMAo=',
                    status_id: 3,
                    created_at: '2024-07-05T08:55:18.190Z',
                    finished_at: '2024-07-05T08:55:18.471Z',
                    time: '0.001',
                    memory: 912,
                    stderr: null,
                    token: '2b1dcfbb-889b-4e5a-9e37-5561ca834243',
                    number_of_runs: 1,
                    cpu_time_limit: '5.0',
                    cpu_extra_time: '1.0',
                    wall_time_limit: '10.0',
                    memory_limit: 128000,
                    stack_limit: 64000,
                    max_processes_and_or_threads: 60,
                    enable_per_process_and_thread_time_limit: false,
                    enable_per_process_and_thread_memory_limit: false,
                    max_file_size: 1024,
                    compile_output: null,
                    exit_code: 0,
                    exit_signal: null,
                    message: null,
                    wall_time: '0.001',
                    compiler_options: null,
                    command_line_arguments: null,
                    redirect_stderr_to_stdout: false,
                    callback_url: null,
                    additional_files: null,
                    enable_network: false,
                    post_execution_filesystem:
                        'UEsDBBQACAAIAOlG5VgAAAAAAAAAAHcAAAAIABwAbWFpbi5jcHBVVAkAA/a0h2b2tIdmdXgLAAEE6AMAAATnAwAATctBCoAgEEDRvacYisAgotZFF6kWooYDOoZam+juWau27/NLJGkPpWGMSaFvzcQYUgInkPjpUdVwMQBpRAASTs99tw4ZohS08aKKRfN5/eIe8prVaGt9A1Vc6J+DTkcg6AZ2P1BLBwjLN4KpZAAAAHcAAABQSwMEFAAIAAgA6UblWAAAAAAAAAAAMEAAAAUAHABhLm91dFVUCQAD9rSHZva0h2Z1eAsAAQToAwAABOcDAADtW29sHEcVn7vz3zg+n4NTO3FQrm0sOaRen0NqX0lCdm2fvYaLYxIbqMAdLndr+9D9424v2EUqrkxbTmBoJSoh8aUVXyIhhPhWJEQTnCZCIOSKD60gCCtyhUsJcQVECKleZnbf7O3M7aFWQv3CPmv37fvNezNv3szczXnnfT0Wn/D7fIiRH30SUWkmJJuyDPhu1FYhWBS1kftH0RHUROQGh56MZI4v+RHHW0AvAHZXAb/qlzl+BPQY9zl4A3KSzPGXoJBxFKraNTpkBP1j/C40wLjTzqwqDHhY5vgM6M+42NHYbA5Y8uZZmeMsHgU/b+cHuy2w2wJ9xkOgHxLi2QDXDcBv+GWO2+479E2/39JT9LkLCrqgX4yfAb0zgt1niF0Tev/Ewn4R2qsXlwj4zzgL62AmfXn41GAmNZBJ58rLA8vR4YHhU1IpL500fQqB7uT0nKlP5xcLLZMbwf+Ao15GTNfnuD4IKeQ64IKrdfDpOjjtR9itAdL/kp5KnjhB+zyMMF7M5nO4pCeKOsa0NGsVkKfFZBKXqDREpaSFF4rpnL6ASslEboFY0wKwzibSOTQZnxodwyelk9KjZjT8EBEf+RtB1fErH0630vIvgbx7TjY5nQsBh7v/cuDO9dojW3gz4mMcduDOcfPII4888sgjjzzyyCOP/nekrv21Rf1W491B8vjMNd1vbKprN1o27HLj0TukyOjbJveOozJ5ovISLXp7yyDU93sq063825tEHLo7VXn9CbVyR13b3p2Znbp1batTRuqt66smuzVCmHHwCrH5R8fRcYQ2FqSOo98wmzLluVei5JeAeta8V97Su18xvSSutc+/SkFjy9Sb31gw+S8oNqc+/TcwUK/vBdTKrnp955zqu6m+vqcftGtoq9Zg26+eHSK+oHL3HDHeeYr04GbjUYL45jfM8r9vLDg9RFRt/p0KZSR0IXU9dl+t3Hy1gfxcNtvZeWfPMBjabKOvEdR8+hXXYRkpn5uqvKF8dqpyX5lTKu8ps/H1vugjJA7q+gDll+LHaUMtO5dovdffC+i9Q38gfsQr/45X7o9X7ilG1211bcOnPvbH8l/o2H1hXvmiMq88oWDSA7TBxpgbVY888sgjjzzyyCOPPPLII4/+38iH/KivhJa0TCb/SLivtI9ivYHT9HU/fXe3f9cwvkf4GcJnCc8Qvkr4w+8axs+pTPhtwn9D+DEfQl2s3icvIt9yyNe7v7nleV9ziL4/pO/yt+4ZxgnQcde13jVS3W2iy94RHiNXhFwFglGOgqGJYM+nOtq+2rKKzh0+/bGPH3sIgd3nyYWJn6cpoARDz/rH2puukMqJSH7So2VyfZOUz9Py0WDou/5YsOc7gVgwvN4QC/Z/u1ENRp5tUoPRtebJoPzlYFQJRpRg/2gwPBrsIfqjwRbTx2vkemm36qNHHnnkkUceeeSRRx555NGHSZFO2XoA7jw37eRHBfm4II8A388qhnPS7SBuQ/2HQGbnd3tBZueSDwN/E8qPCOXsbOiO3yr/556RN5sLWHIjlF8FmZ05joC8D+QM8DbgPcAPIp7sM6pw3pSdNY0AZ79Jm4F3Ay80yBwug8z6wexbhfb3DKs/YdA3QGZx3gW5C8o/bGLnykUahvGeCLmXT46NfSLcPzk9dzw8Ip2SIq5KAgVIr9n5fh732+fUeTxgzwseb7DnB4832vOCx5vs+cPjza5xD5BRDbvirfa48/g+e37weFs1z4DD96OwK95u513weNBebzzeUc1H4PCQfX6fxzvRjCt+wF6/PP4Re93yeJfrvAmQ1cbOg/P4A/Z64/Fu1O+K96CoK36oBrPyM941RJx+bvlJPJ8X4hkE/JqAPwg4EuI8YrZR9Yet2wnzuTY+WagnItSzYurXxvn7dfyv16+XzbJOFH9QFotc9X9i3mvnwy/NemrH8dfm/UBNv24DLvp/z6yndnwbfe75DYfM/+9114zvkz6a91A7H8IE73TMc/Z9MWjW345GIM6nAT9F9f3dKCLU8yOq769dR4qJt6NVmA9sfJ+C+tl6ZP+z/IGpX7uuH4d2xX5pdeKwDHEQ+/sGongPCSePP+OzcLH+F8DPVejXPOAvA74l7AN+WsefTV+dvJNkUS/p5YUFKYlSWlFbTJd0rYj1LE5m8jmthDBO5fFiJn85kcEpPV8s4UR5GSXz2UJG07WUNPzYSNRdCS+kc2mcKBYTK1jL6cUVtFBMZDWcKmezK8TEIWGiqXOqNGlFShYKRG/ionI+hmPT4xgTiXwl4ZgKoDp+EeHxx6eV81NjpIyrJcUDZi4MwpPxC6NKHF+YmLgUm8Wzymg8hiF3RpadSTJYSyX0BMJTF4hpKp3D5ZKWMt2ivS3l8VIil8poCKcyuKhl8smErtFG9HQSF9IEx7Pnx8BrMylHqB7T6plX+HKpZD+bqTvJUtn03inTeNam9oj1cnlDSCqtZPXEZcL1osWX2BPps1YsICmX1zVJGZ0a0BOLSFrMlaWlRGkJSamVHDG2uF60Sq5oxVI6n+METMpIBBJUEZ4KGZ3WT9yXdG2Z3E3XpWLejKmkLcHgL6WKVcmysIbLsmDPpOJENp0kreZ182Y1YFVGQockMh+zZOK4TfAPRr2wlti+sZq3aMlHBH3x3cDDiM9xqubpWXJY0G8QZJqd1eiwZ/ujHQD6AWf7ZnGfPUSu+2TPaacdwr4oFOD9F+0Z0c/ZNkf7bL8VAftlwOk+3eewZ/vhMcTn5rF92VWwZ/t4RmL8Po2sPTSzZ/u3Lugg+z3A/PcLnL4b2nPYs31eGOzDdfxntIisWDJ7th+UwZ5thMX4sf5/BexHQWb7xoKL/QMu9l9D1dxSk+w8Voux3yuMxPlzRbBn+9BwiG/frl7gTwv27PtxBhReEAYsxIvoOcGefR9vd1pyq6Av+r+O+PVXzce1mPjdJtq/KNhX810t+YygL9r/ULBn++kZsBcnrDh/foysPSj7HWrnvw6467cI/Gfk6nDYs33am+/T/jXE52ra+cVgz/KKmwQ7No6/RVYXmT3b7+8O8nr12v+dYG/vG2Hisc+veva3BXu2f+qP/Pf2Gd0BjNmz/VQ04q4vfv78GTBxnTD7zjr2Tu6W3zoD9pvwwUG/Z06g2vXf6vDdSeFhi/9JcFj0v7OOvQH/8NkVcNH+P1BLBwilLANdRAkAADBAAABQSwECHgMUAAgACADpRuVYyzeCqWQAAAB3AAAACAAYAAAAAAABAAAApIEAAAAAbWFpbi5jcHBVVAUAA/a0h2Z1eAsAAQToAwAABOcDAABQSwECHgMUAAgACADpRuVYpSwDXUQJAAAwQAAABQAYAAAAAAAAAAAA7YG2AAAAYS5vdXRVVAUAA/a0h2Z1eAsAAQToAwAABOcDAABQSwUGAAAAAAIAAgCZAAAASQoAAAAA',
                    status: {
                        id: 3,
                        description: 'Accepted',
                    },
                    language: {
                        id: 52,
                        name: 'C++ (GCC 7.4.0)',
                    },
                });
                // status, stderr, time, stdin, stdout
                // response.config;
                // console.log('response', response);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <div className="ml-14 flex h-12 items-center gap-2 px-2">
            <h1 className="max-w-[400px] flex-1 text-xl text-white">Coding Assessment - Spotify #1</h1>
            <div className="ml-auto flex items-center gap-2 rounded-xl pl-5">
                <Button onClick={runCode} disabled={loading} className="gap-2" variant="black">
                    {loading ? (
                        <TbLoader className="animate-spin text-xl" />
                    ) : (
                        <TbTriangleFilled className="rotate-90" />
                    )}
                    Run
                </Button>
                <Button className="gap-2" variant="black">
                    <TbTestPipe className="rotate-90" />
                    Run all test cases
                </Button>
                <Button className="gap-2 text-black" variant="outline">
                    <TbUpload className="text-[15px]" />
                    Submit
                </Button>
            </div>
            {/* <div className="ml-auto flex max-w-[400px] flex-1 justify-end"></div> */}
        </div>
    );
};

export default Header;
