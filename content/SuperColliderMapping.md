**File**:: synth/sc.py
**Tags**:: #vqhapi/synth  

#### Description
This implements many of the standard VQH mappings described in the paper and in the chapter. Uses python-supercollider for creating and controlling SynthDefs from Python.

#### Connected Classes
[[MappingInterface]], [[MusicalScale]]

#### Attributes

- `server`
- `notesd`
- `rt_synth` - for segmented mode
- `scale` [[MusicalScale]]
- `notes`
- `_gain` #vqhapi/property (No inlets implemented yet)


#### Mappings
- `note_loudness_multiple` - Simple additive synthesis - 12 qubits (Deprecated)
- `note_loudness_multiple_8_qubits` -  Simple additive synthesis - 8 qubits (Deprecated)
- `note_loudness_multiple_6_qubits` -  Simple additive synthesis - 6 qubits (Deprecated)
- `note_loudness_multiple_4_qubits` -  Simple additive synthesis - 4 qubits (Deprecated)
- `note_cluster_intensity` - Arpeggios (Deprecated)
- `note_loudness_multiple_rs` -  Subtractive synthesis - 12 qubits (Deprecated)
- `note_loudness_multiple_rt` -  Simple additive synthesis SEGMENTED MODE - 4 qubits (Deprecated)
- `note_loudness_rt` -  General simple additive synthesis, any size - Segmented Mode
- `note_cluster_intensity_rt` - Arpeggios - Segmented Mode

#### Methods
- `free`
- `freall`