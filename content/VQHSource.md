**File**:: core/vqh_source.py
**Tags**::  #vqhapi/source #vqhapi/core  

#### Description
Parent Class that encapsulates everything that can generate data for sonification. It is also where the connection between the quantum side and the sonification side happens.
#### Connected Classes
[[VQHSourceStrategy]], [[VQHCore]], [[VQHDataFileManager]]

#### Attributes

- `strategy`: a [[VQHSourceStrategy]]
- `queue`: queue.Queue() - The VQH [[Queue]]
- `sentinel`: for stopping the thread
- `is_done`:bool - active flag
- `thread`: threading.Thread() - `run_strategy`, daemon=True


#### Methods
- `start_source`
- `iteration_handler`
- `stop`
- `run_strategy`