**File**:: util/data_manager.py
**Tags**:: #vqhapi/util 

#### Description
This data class holds the iteration data, to be handled by necessary file handlers for saving, retireving and populating the queue when using the File strategy


#### Connected Classes
[[FileIO]]

#### Attributes

-  `data` - A List of Dicts. (or is it a list of tuples?)
-  `format` - format of the dataset, defining which tolls will manage it (`json`, `netcdf`, `sql`,`yaml`, `legacy`)


#### Methods
- `to_dict`
- `plot`
- `append_data`
- `clear`
- `__iadd__`