**File**:: core/vqh_core_new.py
**Tags**:: #vqhapi/core

#### Description
The [[VQHController]] has the responsibility of handling the python threads, as well as serving as a facade interface from the user to the core. it is where a set of well defined functions are defined

#### Parent Class / Protocol Class
[[CLI]]

#### Attributes / Connections

-  `core`: [[VQHCore]]
-  `rt_mode`: str - same as `core_rtmode`
-  `waiter`:  threading.Thread - `wait_for_source_and_mapper` to finish their own threads
-  `updater`: threading.Thread - `update_realtime` responsible for refreshing the control file status and triggering [[VQHOutlet]] messages.
-  `is_active`: bool - Active flag
-  `outlet`: [[VQHOutlet]] - runtime class property updater (Publish-subscribe pattern)
-  `qubos_inlet`: [[VQHInlet]] - inlet for re-loading the qubo matrix from CSV
-  `clock_speed_inlet`: [[VQHInlet]] - Inlet for updating Mapper clock speed 
-  `scale_inlet`:  [[VQHInlet]] - Inlet for updating the Synthesizer musical scale
-  `current_state`:  dict - stores the last values read from the rt_conf.json file


#### Methods
- `update_realtime`
- `start`
- `clean`