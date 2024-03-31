import { Button } from '@nextui-org/react';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js';

let waveSurfer: WaveSurfer, record;

const createWaveSurfer = () => {
    // Create an instance of WaveSurfer
    if (waveSurfer) {
        waveSurfer.destroy();
    }
    waveSurfer = WaveSurfer.create({
        container: '#mic',
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
    });

    // Initialize the Record plugin
    record = waveSurfer.registerPlugin(RecordPlugin.create({ scrollingWaveform: false, renderRecordedAudio: false }));
    // Render recorded audio
    record.on('record-end', (blob: Blob | MediaSource) => {
        const container = document.querySelector('#recordings') as HTMLElement;
        const recordedUrl = URL.createObjectURL(blob);

        if (!container) return;
        // Create wavesurfer from the recorded audio
        const newWaveSurfer = WaveSurfer.create({
            container,
            waveColor: 'rgb(200, 100, 0)',
            progressColor: 'rgb(100, 50, 0)',
            url: recordedUrl,
        });

        // Play button
        const button = container.appendChild(document.createElement('button'));
        button.textContent = 'Play';
        button.onclick = () => newWaveSurfer.playPause();
        newWaveSurfer.on('pause', () => (button.textContent = 'Play'));
        newWaveSurfer.on('play', () => (button.textContent = 'Pause'));

        // Download link
        const link = container.appendChild(document.createElement('a'));
        Object.assign(link, {
            href: recordedUrl,
            download: 'recording.' + blob.type.split(';')[0].split('/')[1] || 'webm',
            textContent: 'Download recording',
        });
    });
    pauseButton.style.display = 'none';
    recButton.textContent = 'Record';

    record.on('record-progress', (time) => {
        updateProgress(time);
    });
};

const AudioRecorder = () => {
    return (
        <div>
            <Button onPress={() => {}}>start</Button>
        </div>
    );
};

export default AudioRecorder;
