**File**:: core/vqh_source.py
**Tags**:: #vqhapi/source  #vqhapi/core  

#### Description
This is where the quantum algorithms are happening. It handles the full process of setting up a problem, an experiment, an algorithm to run and solve this problem, a hardware interfece to run the job on, and send the iteration data back to the Source for sonification and dataset storage.

This is also where the real time modes are being defined
#### Connected Classes
[[VQHSourceStrategy]], [[VQHProblem]], [[VQHAlgorithm]]

#### Attributes

- `problem`: [[VQHProblem]]
- `algorithm`: [[VQHAlgorithm]]
- `handler`: Callable - Callback Function for the Queue
- `rt_mode`:str
- `problem_event`: threading.Event - for realtime mode handling
- `lock`: threadsafe operations
- `dataset`: [[VQHDataSet]]
- `type`: str = 'process'
- `file_manager`: [[VQHDataFileManager]]
- `_active` - active flag #vqhapi/property



#### Methods
- `run_fixed
- `run_segmented
- `run_realtime`