function pointMap() {
    let pos = [
        [114.29289, 30.578],
        [114.1736, 30.6053],
        [114.352589, 30.921503],
        [113.990494, 30.333831],
        [111.286572, 30.691469],
        [115.974411, 29.727916],
        [114.382343, 30.858714],
        [114.858495, 30.815953],
        [114.313528, 30.6884],
        [114.177439, 30.625531],
        [114.24029, 30.546687],
        [114.381389, 30.383611],
        [114.376111, 30.575556],
        [114.342145, 30.576787],
        [114.181955, 30.763902],
        [114.186733, 30.768524],
        [114.349348, 30.754196],
        [114.240436, 30.687281],
        [114.35952, 30.75862],
        [114.44469, 30.78821],
        [114.724491, 30.76607],
        [114.536238, 30.784664],
        [114.061944, 30.748611],
        [114.096667, 30.708889],
        [113.970845, 30.353602],
        [114.19, 30.470556],
        [114.33165, 30.474036],
        [114.182146, 30.641983],
        [113.910396, 30.566133],
        [114.291867, 30.693983],
        [114.300545, 30.687317],
        [114.211033, 30.401589],
        [113.897875, 30.447642],
        [114.048403, 30.365459],
        [114.3069, 31.101856],
        [114.248139, 30.24025],
        [114.292889, 30.299889],
        [114.279833, 30.29175],
        [114.291086, 31.053603],
        [114.270083, 31.213056],
        [114.722431, 30.913478],
        [114.736111, 30.950667],
        [114.38225, 30.298361],
        [114.32925, 30.302111],
        [114.387333, 30.30825],
        [114.340361, 30.06825],
        [114.460111, 30.049083],
        [114.435778, 30.017111],
        [114.3755, 31.272611],
        [114.395, 31.017028],
        [114.385556, 31.109722],
        [114.398831, 30.273589],
        [114.421389, 31.133972],
        [114.432661, 31.169269],
        [114.311111, 31.306111],
        [114.341667, 30.046389],
        [114.492179, 30.888778],
        [113.94548, 30.481708],
        [114.264722, 31.012639],
        [114.235606, 31.08155],
        [114.311536, 31.307464],
        [114.286786, 31.303081],
        [114.312178, 31.302522],
        [114.345, 31.311028],
        [114.295556, 30.301694],
        [114.229151, 30.662968],
        [114.065519, 30.65611],
        [114.065581, 30.658472],
        [114.772628, 30.675502],
        [114.796878, 30.675657],
        [114.718504, 30.677659],
        [113.84729, 30.267132],
        [114.185308, 30.125826],
        [114.185183, 30.125814],
        [114.146954, 30.156685],
        [114.155435, 30.146273],
        [114.132439, 30.315908],
        [114.131661, 30.316328],
        [114.10893, 30.555798],
        [113.918717, 30.370875],
        [113.952424, 30.401151],
        [114.179787, 30.652607],
        [114.100652, 30.681138],
        [113.983516, 30.721192],
        [114.160962, 30.552317],
        [114.482997, 30.616051],
        [114.412415, 30.454948],
        [114.085051, 30.636615],
        [114.495694, 30.825889],
        [114.053011, 30.368828],
        [113.808401, 30.211162],
        [113.937005, 30.59571],
        [113.999609, 30.570841],
        [114.38355, 30.607408],
        [114.369892, 30.530803],
        [114.370911, 30.589797],
        [114.341269, 30.552611],
        [114.254069, 30.61785],
        [114.161819, 30.456294],
        [113.80739, 30.211654],
        [114.751194, 30.676111],
        [114.827354, 30.742118],
        [114.358243, 30.665985],
        [114.304969, 30.591842],
        [114.314743, 30.624664],
        [114.210671, 30.472628],
        [114.26505, 30.49727],
        [114.23013, 30.67122],
        [114.194778, 30.687778],
        [114.518333, 30.608333],
        [114.529444, 30.711944],
        [114.3297, 31.2542],
        [114.660833, 30.931944],
        [114.384167, 30.599444],
        [114.456667, 30.594167],
        [114.2656, 31.2683],
        [114.3722, 31.2159],
        [114.529111, 30.989944],
        [114.893333, 30.903056],
        [113.723568, 30.934322],
        [114.331944, 30.705833],
        [113.930556, 30.555],
        [113.801389, 30.358056],
        [114.281667, 30.640278],
        [113.829639, 30.429833],
        [114.27187, 30.54779],
        [114.26479, 30.53661],
        [114.29981, 30.54968],
        [114.4181, 30.4606],
        [114.4608, 30.5039],
        [114.08, 30.4664],
        [114.2308, 30.5017],
        [114.1156, 30.3978],
        [114.3689, 30.5422],
        [114.3897, 30.5683],
        [114.287222, 30.605556],
        [114.309444, 30.644167],
        [114.2999, 30.595917],
        [114.2711, 30.63333],
        [114.371008, 30.69167],
        [114.301667, 30.594444],
        [114.241944, 30.452778],
        [114.3625, 30.478333],
        [114.250833, 30.6525],
        [113.913056, 30.346111],
        [113.981389, 30.520278],
        [114.28278, 30.58556],
        [114.813705, 30.852198],
        [114.22556, 31.22861],
        [114.3675, 30.375],
        [114.391667, 30.340556],
        [114.349444, 30.0925],
        [114.419444, 30.758333],
        [114.319, 31.21336],
        [114.921111, 30.836667],
        [114.598139, 30.835811],
        [114.401998, 30.562321],
        [114.226289, 30.882304],
        [114.595515, 30.83629],
        [114.1912, 30.1312],
        [114.76207, 30.9338],
        [114.286133, 30.568183],
        [114.30148, 31.30226],
        [114.357736, 31.099867],
        [112.232327, 30.308256],
        [114.03457, 30.362892],
        [114.359148, 30.717034],
        [112.580339, 31.20478],
        [114.881, 31.169944],
        [114.590472, 31.290694],
        [114.557232, 30.528154],
        [114.317819, 30.720567],
        [114.005278, 30.519167],
        [114.375461, 30.482392],
        [114.373102, 30.537052],
        [114.188114, 30.55951],
        [114.176699, 30.179811],
        [114.233926, 30.058446],
        [114.21417, 30.135041],
        [114.132306, 30.30718],
        [114.190905, 30.760081],
        [114.364332, 30.773092],
        [114.144272, 30.642662],
        [114.02073, 30.33977],
        [114.160686, 30.474061],
        [114.126693, 30.373439],
        [114.167605, 30.647057],
        [113.923398, 30.553225],
        [114.433931, 30.356472],
        [113.977316, 30.376767],
        [113.94597, 30.404461],
        [113.96999, 30.392553],
        [114.093568, 30.567419],
        [114.298017, 30.250467],
        [114.230333, 30.339167],
        [114.303722, 30.330417],
        [114.558306, 30.507583],
        [114.328361, 30.810833],
        [114.9161, 30.918683],
        [114.022725, 30.584036],
        [114.192917, 31.10675],
        [114.304556, 30.295083],
        [114.336334, 30.100578],
        [114.346481, 30.108437],
        [114.408806, 30.028389],
        [114.439444, 30.387667],
        [115.031667, 30.908389],
        [114.832939, 30.837733],
        [114.781256, 30.967906],
        [114.364444, 31.281667],
        [114.473981, 30.953467],
        [114.37669, 31.057426],
        [114.446389, 31.171389],
        [114.301944, 31.284333],
        [114.516587, 30.987309],
        [114.50571, 30.900678],
        [114.571875, 30.943096],
        [114.243252, 31.08553],
        [114.433867, 31.027714],
        [114.376667, 31.243722],
        [114.340556, 31.197028],
        [114.274458, 31.269875],
        [114.284467, 31.337975],
        [114.593177, 30.75208],
        [113.948068, 30.773045],
        [114.229365, 30.663717],
        [114.110461, 30.619263],
        [114.537612, 30.69593],
        [114.045386, 30.381339],
        [114.145247, 30.26725],
        [113.785739, 30.414733],
        [113.927613, 30.405966],
        [113.770153, 30.251221],
        [114.034572, 30.362892],
        [114.377309, 30.803823],
        [114.364474, 30.746031],
        [114.584575, 30.557525],
        [114.75824, 30.764682],
        [114.116945, 30.671562],
        [114.30598, 30.498158],
        [114.22272, 30.51643],
        [114.35655, 30.58695],
        [114.235443, 30.449585],
        [114.41264, 30.62834],
        [114.208611, 30.538333],
        [113.975803, 30.755291],
        [114.070951, 30.735033],
        [114.42161, 30.809672],
        [114.476461, 30.626833],
        [114.766001, 30.677195],
        [113.858856, 30.451651],
        [114.308872, 30.622814],
        [114.356053, 30.579106],
        [113.7815, 30.25116],
        [114.641154, 30.692271],
        [114.10847, 30.639409],
        [114.296233, 30.598305],
        [114.302694, 30.667589],
        [114.30371, 30.67463],
        [114.371389, 30.483611],
        [114.406389, 30.621389],
        [114.478889, 30.567778],
        [114.718889, 30.676944],
        [114.811667, 30.882222],
        [114.563556, 30.668944],
        [114.452778, 30.578611],
        [114.498333, 30.505],
        [114.415913, 31.318847],
        [114.2139, 31.235],
        [114.3867, 31.3014],
        [114.3772, 31.1417],
        [114.4294, 31.0456],
        [114.4264, 31.1156],
        [114.4564, 31.1022],
        [114.2011, 31.9283],
        [114.699167, 30.928056],
        [115.034167, 30.909722],
        [114.171944, 30.4675],
        [114.240556, 30.549444],
        [113.89342, 30.857815],
        [114.301667, 30.672778],
        [113.970278, 30.528889],
        [114.30834, 30.56493],
        [114.0, 30.58],
        [114.418056, 30.460556],
        [113.933333, 30.742778],
        [114.153056, 30.491944],
        [114.081547, 30.538689],
        [114.42194, 30.58556],
        [114.31361, 30.64778],
        [114.361222, 30.719173],
        [114.18917, 30.69194],
        [114.464167, 30.018333],
        [114.314617, 30.377992],
        [114.232222, 31.020278],
        [114.291111, 30.808333],
        [114.370158, 30.901331],
        [114.888611, 30.997778],
        [114.7925, 30.930556],
        [114.816111, 30.799722],
        [114.730278, 30.808611],
        [114.1536, 31.0448],
        [114.129606, 30.731423],
        [114.264038, 30.335257],
        [114.666666, 30.883333],
        [114.32962, 30.69528],
        [114.302, 31.2998],
        [114.858592, 30.816052],
        [114.273441, 30.652525],
        [114.581944, 30.3],
        [114.253481, 30.752813],
        [114.480833, 30.576222],
        [114.335078, 30.499041],
        [114.385203, 30.488785],
        [114.425705, 30.532415],
        [114.173949, 30.13969],
        [114.223705, 30.113441],
        [114.194956, 30.718094],
        [114.169496, 30.671265],
        [114.115556, 30.629722],
        [114.122822, 30.719087],
        [114.08, 30.398056],
        [114.263759, 30.598538],
        [114.272222, 30.554167],
        [114.331005, 30.59833],
        [114.514998, 30.603928],
        [114.267301, 30.670252],
        [113.939022, 30.565757],
        [113.94599, 30.533208],
        [113.858952, 30.328395],
        [114.040978, 30.399266],
        [113.955719, 30.399831],
        [113.929212, 30.435533],
        [113.883641, 30.434356],
        [114.314611, 30.309611],
        [114.282056, 30.244194],
        [114.177111, 30.973389],
        [114.850994, 30.879919],
        [114.465444, 30.402861],
        [114.370694, 30.239806],
        [114.409694, 30.021778],
        [114.460167, 30.015611],
        [114.422056, 30.1435],
        [114.875622, 30.886128],
        [113.871111, 30.508722],
        [114.261389, 31.065444],
        [114.457862, 31.115021],
        [114.371111, 31.040833],
        [113.935159, 30.471086],
        [114.348333, 31.262778],
        [114.345556, 31.28],
        [114.338342, 31.296047],
        [114.322731, 31.27505],
        [114.346098, 30.710888],
        [114.213359, 30.475982],
        [114.28613, 30.53128],
        [113.953847, 30.437514],
        [114.224999, 30.672677],
        [114.59502, 30.666559],
        [114.798476, 30.67524],
        [114.537192, 30.696389],
        [114.132608, 30.170461],
        [114.146897, 30.156608],
        [113.975581, 30.608192],
        [113.870008, 30.465293],
        [114.030635, 30.372366],
        [114.136612, 30.542066],
        [114.180087, 30.652275],
        [114.108101, 30.659765],
        [114.165837, 30.557284],
        [114.235, 30.284722],
        [114.155126, 30.560627],
        [114.153653, 30.555236],
        [114.20897, 30.422891],
        [114.183645, 30.374169],
        [114.407319, 30.374022],
        [113.905201, 30.510663],
        [114.161759, 30.69718],
        [114.225001, 30.645622],
        [114.200499, 30.409184],
        [114.263122, 30.579211],
        [114.321603, 30.639208],
        [114.43756, 30.720093],
        [113.872019, 30.279837],
        [113.929375, 30.358135],
        [114.534568, 30.695016],
        [114.642818, 30.6923],
        [114.097311, 30.639016],
        [114.309568, 30.618697],
        [114.30279, 30.6742],
        [114.228933, 30.49715],
        [114.107806, 30.2305],
        [114.34845, 30.62243],
        [114.348611, 30.621667],
        [114.5575, 30.541667],
        [114.696667, 30.917222],
        [114.985, 30.876944],
        [114.302222, 30.533611],
        [114.3585, 31.2242],
        [114.748611, 30.928611],
        [114.369472, 30.047583],
        [114.138333, 30.556667],
        [114.017464, 30.788544],
        [113.5145, 30.237],
        [114.2011, 31.0831],
        [114.1753, 30.8722],
        [114.1761, 30.9547],
        [114.02, 30.725833],
        [114.262778, 30.585833],
        [114.238611, 30.623611],
        [114.243333, 30.6225],
        [113.863889, 30.253611],
        [114.365928, 30.626469],
        [114.1497, 30.5208],
        [114.2756, 30.4408],
        [114.4481, 30.2603],
        [114.215, 30.594444],
        [114.2732, 30.54026],
        [114.3198, 30.57459],
        [114.5675, 30.657854],
        [114.344444, 30.549167],
        [114.3661, 30.592602],
        [114.02, 30.775833],
        [114.051389, 30.316944],
        [114.005556, 30.466389],
        [114.12944, 30.455],
        [114.22917, 30.67306],
        [114.44639, 30.47944],
        [113.99306, 30.68972],
        [114.285, 30.151944],
        [114.124722, 30.338333],
        [114.454722, 30.241111],
        [114.532514, 30.924869],
        [114.203333, 31.304722],
        [114.302222, 30.955278],
        [114.346389, 31.105833],
        [115.058889, 30.890278],
        [114.859594, 30.920903],
        [114.384587, 30.590187],
        [114.535252, 30.922743],
        [114.2106, 30.0721],
        [113.905693, 30.344387],
        [114.0004, 30.3804],
        [114.6608, 30.9319],
        [112.413298, 29.740976],
        [114.382192, 30.859305],
        [114.437355, 30.721328],
        [112.612297, 30.711031],
        [115.067444, 31.025139],
        [114.131667, 30.515556],
        [114.174722, 30.553611],
        [114.232233, 30.689208],
        [114.718843, 30.676171],
        [114.718356, 30.702443],
        [114.060556, 30.651111],
        [114.009166, 30.336697],
        [114.126944, 30.445833],
        [114.075044, 30.377419],
        [114.094763, 30.419185],
        [114.267237, 30.61],
        [114.15714, 30.628278],
        [114.213333, 30.649722],
        [114.168911, 30.377015],
        [114.030845, 30.583536],
        [113.956041, 30.410662],
        [114.556469, 30.564265],
        [113.933156, 30.554046],
        [113.939827, 30.388921],
        [114.396336, 30.546688],
        [114.146882, 30.587598],
        [114.236694, 30.335333],
        [114.315041, 30.074953],
        [114.617522, 30.880267],
        [114.188819, 31.246717],
        [114.707799, 30.849927],
        [114.362306, 30.296389],
        [114.356556, 30.283139],
        [114.406694, 30.33575],
        [114.350444, 30.330472],
        [114.332611, 30.232639],
        [114.422917, 30.110889],
        [114.267781, 31.200919],
        [114.21525, 31.211964],
        [115.0, 30.913889],
        [113.94677, 30.538762],
        [114.856017, 30.927928],
        [114.371944, 31.3115],
        [114.225403, 30.332542],
        [114.401458, 31.01125],
        [114.290806, 30.847889],
        [114.31475, 30.341778],
        [114.441389, 30.807222],
        [113.849117, 30.517756],
        [113.882048, 30.535913],
        [114.431111, 31.170278],
        [114.338786, 31.272039],
        [114.281058, 31.341208],
        [114.301278, 31.337986],
        [114.14049, 30.44061],
        [113.972046, 30.776573],
        [114.151481, 30.6608],
        [114.52065, 30.650335],
        [114.521943, 30.650963],
        [114.538991, 30.689137],
        [114.734527, 30.610493],
        [114.54571, 30.743332],
        [114.545425, 30.743441],
        [113.945689, 30.329605],
        [113.90722, 30.346044],
        [114.066964, 30.344531],
        [114.145442, 30.267214],
        [114.166042, 30.136303],
        [114.354687, 30.74937],
        [114.184315, 30.762834],
        [114.173586, 30.684995],
        [114.234444, 30.448889],
        [114.31672, 30.66276],
        [114.203804, 30.512494],
        [114.190774, 30.518143],
        [114.235945, 30.534217],
        [113.95829, 30.387666],
        [114.500189, 30.540797],
        [114.226182, 30.668526],
        [114.546697, 30.621167],
        [114.539804, 30.586707],
        [114.670724, 30.689138],
        [114.717906, 30.678459],
        [114.331979, 30.56156],
        [114.56333, 30.812132],
        [114.396632, 30.614346],
        [114.332237, 30.705432],
        [114.44705, 30.745447],
        [114.785435, 30.675117],
        [114.783823, 30.676416],
        [114.108995, 30.639724],
        [114.34851, 30.62254],
        [114.228372, 30.451414],
        [114.28888, 30.57787],
        [114.327222, 30.541667],
        [114.313889, 30.566667],
        [114.394167, 30.338611],
        [114.4783, 31.5017],
        [114.363229, 31.533969],
        [114.3006, 31.4164],
        [114.3469, 30.0478],
        [114.632167, 31.056611],
        [114.124722, 30.296111],
        [113.4956, 30.3698],
        [113.6986, 30.3595],
        [114.1725, 30.565833],
        [114.928611, 30.742222],
        [114.197778, 30.608889],
        [114.39, 30.57],
        [114.4547, 30.4739],
        [114.4231, 30.4508],
        [114.2831, 30.6472],
        [114.2636, 30.6028],
        [114.4292, 30.1494],
        [114.279437, 30.636378],
        [114.406667, 30.527778],
        [114.3598, 30.53304],
        [114.116667, 30.734444],
        [114.033333, 30.65],
        [114.122778, 30.680833],
        [114.099722, 30.758611],
        [113.9114, 30.42042],
        [113.9627, 30.28714],
        [114.043611, 30.508889],
        [113.928611, 30.391667],
        [113.756111, 30.333611],
        [113.9721, 30.456183],
        [114.31139, 30.51333],
        [114.3671, 30.25248],
        [114.291944, 31.293333],
        [114.418333, 30.964167],
        [114.467778, 31.055278],
        [114.749722, 30.926389],
        [114.801453, 30.846817],
        [114.414403, 30.710743],
        [114.1736, 30.5097],
        [113.975286, 30.299908],
        [114.72115, 30.61948],
        [108.392392, 30.815928],
        [113.324373, 29.666198],
        [115.067185, 30.255934],
        [114.079509, 30.373565],
        [114.333618, 30.705583],
        [113.95714, 30.68715],
        [114.30136, 30.67275],
        [113.730303, 30.937727],
        [114.202203, 30.279163],
        [114.251166, 30.612495],
        [114.279993, 30.598554],
        [114.343515, 30.484265],
        [114.39242, 30.59287],
        [114.189114, 30.55551],
        [114.316676, 30.567872],
        [114.13724, 30.31993],
        [114.137324, 30.327934],
        [114.199826, 30.702579],
        [114.405686, 30.725791],
        [114.59556, 30.647419],
        [114.567917, 30.759222],
        [114.80412, 30.79929],
        [114.089444, 30.733889],
        [114.107614, 30.692813],
        [114.124842, 30.637197],
        [114.081667, 30.399444],
        [114.153056, 30.438889],
        [114.091885, 30.412919],
        [114.25, 30.563611],
        [114.308839, 30.564345],
        [114.343418, 30.554711],
        [114.40895, 30.616618],
        [114.125581, 30.413867],
        [114.2414, 30.4519],
        [114.473936, 31.080119],
        [114.437475, 30.033336],
        [114.266503, 30.305539],
        [114.277472, 30.235278],
        [114.304361, 30.238139],
        [114.301833, 30.259667],
        [114.294861, 30.070722],
        [114.21957, 31.087103],
        [114.317806, 30.281139],
        [114.327694, 30.318389],
        [114.388694, 30.063583],
        [114.508472, 30.064417],
        [114.384528, 30.053083],
        [114.428278, 30.016611],
        [114.213144, 31.290622],
        [114.453194, 30.398806],
        [114.792028, 30.937703],
        [114.477823, 30.917401],
        [114.367078, 31.291653],
        [114.405278, 31.104028],
        [114.58346, 30.941318],
        [114.475019, 30.953544],
        [114.280694, 30.365889],
        [113.926106, 30.480439],
        [113.9575, 30.4765],
        [114.323889, 31.282417],
        [114.432904, 30.702327],
        [114.117292, 30.671447],
        [113.983516, 30.720192],
        [114.230813, 30.668162],
        [114.537687, 30.69539],
        [114.718271, 30.677898],
        [114.143535, 30.525828],
        [113.84738, 30.267437],
        [114.166034, 30.136194],
        [113.785696, 30.414534],
        [113.927632, 30.40545],
        [114.170417, 30.585718],
        [114.005879, 30.600596],
        [113.814309, 30.324857],
        [114.198233, 30.659489],
        [114.018394, 30.7886],
        [114.332912, 30.494922],
        [114.394996, 30.600593],
        [114.3819, 30.683055],
        [114.3175, 30.443611],
        [113.870854, 30.389934],
        [114.406027, 30.449814],
        [114.530996, 30.701823],
        [114.33657, 30.583439],
        [114.363092, 30.622389],
        [114.378815, 30.859951],
        [113.908401, 30.345645],
        [114.790948, 30.869496],
        [114.791254, 30.869076],
        [114.364472, 30.680471],
        [114.31635, 30.618303],
        [114.29575, 30.58498],
        [114.108639, 30.356806],
        [114.643528, 30.692778],
        [114.536167, 30.696361],
        [114.379139, 30.860333],
        [114.22917, 30.67116],
        [114.31362, 30.56648],
        [114.4338, 31.3086],
        [114.383333, 30.883333],
        [114.324722, 31.174722],
        [114.603528, 31.273833],
        [114.913611, 30.786111],
        [114.547611, 30.461583],
        [114.5019, 31.5783],
        [114.3036, 31.0289],
        [114.346028, 30.710861],
        [114.183056, 30.096667],
        [114.1825, 30.097222],
        [113.961211, 30.683142],
        [114.203889, 30.641111],
        [114.173611, 30.343333],
        [114.2467, 31.0164],
        [114.3919, 30.64],
        [114.3511, 30.5383],
        [114.3725, 30.68821],
        [114.193611, 30.567778],
        [114.383889, 30.506389],
        [114.391111, 30.5175],
        [114.336108, 30.496086],
        [113.765556, 30.390833],
        [113.88, 30.538333],
        [114.810705, 30.853198],
        [114.18139, 30.64222],
        [114.255278, 30.331944],
        [114.300833, 30.750556],
        [114.498611, 30.704444],
        [114.387664, 31.234417],
        [114.667778, 30.874444],
        [114.533889, 30.696389],
        [114.647222, 30.596389],
        [114.3824, 30.4048],
        [114.092357, 30.319983],
        [114.01996, 30.777101],
        [114.796478, 30.87565],
        [114.53012, 30.71079],
        [116.224571, 29.75557],
        [114.65355, 30.862765],
        [114.19025, 30.691731],
        [112.45257, 31.460528],
        [114.263452, 30.601225],
        [114.266911, 30.453398],
        [114.202617, 30.481585],
        [114.388056, 30.437222],
        [114.151109, 30.266209],
        [114.144997, 30.311453],
        [114.335102, 30.770038],
        [114.428286, 30.731595],
        [114.687416, 30.617609],
        [114.14254, 30.7248],
        [114.091389, 30.755278],
        [114.05226, 30.758843],
        [114.126389, 30.4575],
        [114.13499, 30.410049],
        [114.274406, 30.593549],
        [114.052042, 30.578854],
        [114.628839, 30.480383],
        [114.626733, 30.508086],
        [113.815652, 30.314468],
        [114.710717, 30.926967],
        [115.003758, 30.863175],
        [114.370044, 31.076022],
        [114.311444, 30.238139],
        [114.275444, 30.193722],
        [114.713889, 30.972667],
        [114.232633, 31.115308],
        [114.828083, 30.865361],
        [114.712367, 30.897903],
        [114.728442, 30.936603],
        [114.349083, 30.283083],
        [114.299917, 30.285583],
        [114.405278, 30.3225],
        [114.399194, 30.320444],
        [114.328361, 30.169194],
        [114.311694, 30.260667],
        [114.397694, 30.085278],
        [114.364917, 30.070667],
        [114.257528, 31.228889],
        [114.251583, 31.257778],
        [114.489278, 30.40325],
        [114.88, 30.950722],
        [114.438783, 31.199539],
        [114.193194, 30.350972],
        [114.298778, 30.369778],
        [114.549156, 30.85591],
        [114.245333, 31.065686],
        [114.505556, 31.140833],
        [114.506944, 31.110278],
        [114.348586, 31.269972],
        [114.277778, 31.181111],
        [114.253267, 31.303886],
        [114.260556, 31.338917],
        [114.229247, 31.310008],
        [114.306125, 31.320536],
        [114.614203, 30.868414],
        [114.734681, 30.610458],
        [114.537553, 30.695739],
        [114.18, 30.84],
        [114.173607, 30.684633],
        [114.561303, 30.567513],
        [114.596088, 30.66511],
        [114.617243, 30.620823],
        [114.111599, 30.552273],
        [114.183895, 30.763286],
        [114.116914, 30.635379],
        [114.277654, 30.464507],
        [114.301725, 30.465135],
        [114.19834, 30.659286],
        [114.085895, 30.700728],
        [114.30971, 30.49619],
        [114.170226, 30.515419],
        [114.409022, 30.629023],
        [113.928045, 30.584229],
        [113.870936, 30.390052],
        [114.195896, 30.531312],
        [114.465681, 30.534919],
        [114.475904, 30.636825],
        [114.526726, 30.628068],
        [114.544449, 30.584486],
        [114.109989, 30.585475],
        [114.30228, 30.63493],
        [114.2, 30.6],
        [114.271297, 30.585528],
        [114.359306, 30.731049],
        [114.434315, 30.702791],
        [114.139107, 30.450122],
        [114.045998, 30.356429],
        [114.077054, 30.645224],
        [114.109665, 30.639343],
        [114.314404, 30.638607],
        [114.798861, 30.669389],
        [114.241389, 30.451944],
        [114.466666, 31.066666],
        [114.405278, 30.655],
        [114.46, 30.630556],
        [114.320556, 30.533333],
        [114.323333, 30.213889],
        [114.3017, 31.3006],
        [114.231972, 31.268306],
        [114.889444, 30.997778],
        [114.9725, 30.948056],
        [114.790306, 30.837194],
        [114.791111, 30.836389],
        [114.898333, 30.8325],
        [114.985556, 30.877778],
        [114.173333, 30.605278],
        [114.178889, 30.759444],
        [114.140556, 30.443056],
        [114.2581, 30.0478],
        [114.012778, 30.778611],
        [113.775556, 30.3175],
        [114.5006, 30.5],
        [114.3281, 30.5489],
        [114.1683, 30.5061],
        [114.4642, 31.1183],
        [114.1269, 30.6378],
        [114.256667, 30.585],
        [114.239444, 30.627222],
        [114.2106, 30.59969],
        [114.3016, 30.55156],
        [113.775556, 30.242222],
        [114.126944, 30.195556],
        [114.366389, 31.221389],
        [114.444167, 30.751389],
        [114.450278, 31.106111],
        [114.490556, 30.883889],
        [114.983889, 30.878056],
        [114.651917, 30.862131],
        [114.062292, 30.340289],
        [114.35893, 30.717516],
        [114.652664, 30.862171],
        [114.787535, 30.836295],
        [114.151545, 30.334694],
        [114.733333, 31.166666],
        [114.4847, 30.7683],
        [114.286303, 30.453626],
        [114.200527, 30.490007],
        [114.176457, 30.50502],
        [114.104235, 30.521095],
        [114.069444, 30.5375],
        [114.366247, 30.439699],
        [114.324479, 30.43981],
        [114.399142, 30.437927],
        [114.396056, 30.418953],
        [114.187778, 30.520556],
        [114.197827, 30.286808],
        [114.135691, 30.330988],
        [114.273889, 30.699528],
        [114.284012, 30.693922],
        [114.149424, 30.70282],
        [114.259795, 30.653331],
        [114.099888, 30.747784],
        [114.079444, 30.7625],
        [114.101667, 30.708611],
        [114.06061, 30.37606],
        [114.271079, 30.596633],
        [114.300825, 30.530959],
        [114.197457, 30.653678],
        [114.204346, 30.64031],
        [114.19906, 30.386633],
        [114.191103, 30.37426],
        [114.392304, 30.72328],
        [114.604536, 30.549948],
        [114.582333, 30.4165],
        [114.247656, 30.440416],
        [113.881201, 30.327834],
        [114.017822, 30.370905],
        [114.037592, 30.370625],
        [114.460365, 30.774281],
        [114.336389, 30.573889],
        [114.981389, 30.852778],
        [114.305431, 31.209883],
        [114.274611, 30.241278],
        [114.287222, 30.308861],
        [114.286139, 30.268972],
        [114.288306, 30.291083],
        [114.360969, 30.028331],
        [114.356556, 30.294361],
        [114.519722, 30.50625],
        [114.620972, 30.858528],
        [114.921667, 30.971028],
        [114.829828, 30.867825],
        [114.742923, 30.913632],
        [114.338472, 30.327389],
        [114.532194, 30.063167],
        [114.491861, 30.038889],
        [114.336083, 30.100194],
        [114.4425, 30.030194],
        [114.309472, 30.122111],
        [114.265014, 31.222603],
        [114.262657, 31.225977],
        [114.21, 31.22925],
        [114.239717, 31.253058],
        [115.03394, 30.8657],
        [115.065278, 30.885722],
        [114.851944, 30.91825],
        [114.370556, 31.286833],
        [114.404444, 31.028444],
        [114.258333, 31.300417],
        [114.474406, 30.943033],
        [114.471811, 30.946961],
        [114.345861, 30.360528],
        [114.245694, 30.361472],
        [114.270083, 30.358917],
        [114.354667, 30.363444],
        [114.272639, 30.372222],
        [114.283333, 30.368472],
        [114.569145, 30.922017],
        [114.276264, 31.344186],
        [114.289722, 31.262639],
        [114.220787, 30.44783],
        [114.224855, 30.672659],
        [114.51699, 30.587389],
        [114.507589, 30.764017],
        [114.507582, 30.763628],
        [114.688055, 30.795229],
        [114.144566, 30.525433],
        [113.945949, 30.330085],
        [114.046776, 30.327183],
        [114.132731, 30.170472],
        [113.861245, 30.327605],
        [114.1864, 30.537112],
        [114.365299, 30.745697],
        [114.14687, 30.58828],
        [114.381765, 30.859628],
        [113.975932, 30.720365],
        [114.538241, 30.689353],
        [114.208185, 30.473662],
        [114.236111, 30.534167],
        [114.170802, 30.54342],
        [113.817304, 30.367207],
        [114.469765, 30.842297],
        [114.161244, 30.459169],
        [113.956854, 30.363494],
        [114.045999, 30.357216],
        [114.409483, 30.650869],
        [114.284136, 30.648192],
        [113.867879, 30.483813],
        [114.26378, 30.62421],
        [114.685008, 30.679666],
        [114.725604, 30.678476],
        [114.82706, 30.742722],
        [114.095591, 30.640399],
        [114.16112, 30.61416],
        [114.31185, 30.612919],
        [114.797361, 30.673583],
        [114.534056, 30.696639],
        [114.391944, 30.513056],
        [114.356667, 31.104722],
        [114.3017, 31.3],
        [114.666389, 30.876111],
        [114.605278, 30.530556],
        [114.501111, 30.155556],
        [114.4031, 31.2772],
        [114.366583, 31.213778],
        [114.2949, 31.1709],
        [114.3211, 31.9919],
        [114.3739, 30.9142],
        [114.15, 30.15],
        [113.503741, 30.38827],
        [114.007778, 30.584722],
        [114.185833, 30.576389],
        [114.280278, 30.630833],
        [114.139167, 30.439444],
        [114.299722, 30.59],
        [114.240556, 30.5725],
        [114.3247, 30.6631],
        [114.4, 30.7983],
        [114.2817, 31.1797],
        [114.2086, 31.1264],
        [114.4189, 30.4017],
        [114.4117, 30.5094],
        [114.3725, 30.5219],
        [114.0942, 30.5319],
        [114.587736, 30.609217],
        [114.244722, 30.610833],
        [114.331111, 30.581389],
        [114.475, 30.648056],
        [114.590556, 30.468333],
        [114.060833, 30.458611],
        [113.836667, 30.425],
        [113.911389, 30.478333],
        [113.96818, 30.64943],
        [114.58, 30.55639],
        [114.19556, 31.09056],
        [114.41806, 30.70028],
        [114.157222, 30.158056],
        [114.504167, 30.116667],
        [114.226111, 30.885278],
        [114.599444, 30.838056],
        [114.789722, 30.671389],
        [114.972222, 30.948611],
        [114.7621, 30.80389],
        [114.683409, 30.878171],
        [113.992315, 30.306874],
        [114.022966, 30.45725],
        [113.854459, 30.395858],
        [114.171392, 30.160875],
        [114.8554, 30.8059],
        [114.386556, 30.881194],
        [113.910494, 30.515028],
        [114.3295, 31.2542],
        [112.897394, 29.807577],
        [113.145491, 29.447775],
        [111.010551, 30.827145],
        [114.1792, 30.7597],
        [114.787058, 30.835574],
        [113.83738, 30.489329],
        [111.499548, 32.567033],
        [113.441487, 30.402077],
        [113.856971, 30.655264],
        [113.898452, 30.876569],
        [114.306758, 30.729435],
        [114.163056, 30.521111],
        [114.162055, 30.524111],
        [114.366507, 30.471101],
        [114.185531, 30.517983],
        [114.667205, 30.61129],
        [114.72974, 30.724309],
        [114.175387, 30.731527],
        [114.035621, 30.326348],
        [114.152513, 30.462749],
        [114.086504, 30.405339],
        [114.150978, 30.437363],
        [114.200278, 30.545],
        [114.319785, 30.526956],
        [114.200913, 30.649297],
        [114.195869, 30.671707],
        [113.936244, 30.510233],
        [114.085571, 30.360823],
        [114.069256, 30.350001],
        [114.304491, 30.689658],
        [114.574549, 30.639281],
        [114.556659, 30.690633],
        [114.580782, 30.298837],
        [114.530132, 30.576527],
        [113.902851, 30.438336],
        [113.885079, 30.471188],
        [113.899626, 30.436154],
        [114.419746, 30.595008],
        [114.5183, 30.6083],
        [114.908972, 30.788878],
        [114.5926, 30.920931],
        [114.195917, 30.321167],
        [114.290361, 30.318667],
        [114.283, 30.285833],
        [114.315948, 30.239891],
        [114.374222, 30.039028],
        [114.552969, 30.469103],
        [114.350444, 31.180087],
        [114.700695, 30.897222],
        [114.609397, 30.770697],
        [114.604444, 30.758361],
        [114.616946, 30.929415],
        [114.207207, 31.092576],
        [114.280694, 31.254491],
        [114.723156, 30.980472],
        [114.72795, 30.959517],
        [114.370444, 30.051861],
        [114.351947, 30.170603],
        [114.521012, 30.045692],
        [114.537639, 30.051639],
        [114.404306, 30.043278],
        [114.505206, 30.516964],
        [115.046111, 30.895972],
        [114.381667, 31.30575],
        [114.403056, 31.079056],
        [114.188244, 30.346131],
        [114.347944, 30.342194],
        [114.466997, 30.451703],
        [114.496667, 31.010694],
        [114.476834, 30.863552],
        [114.538911, 30.986133],
        [113.922389, 30.491032],
        [113.878626, 30.55162],
        [114.460006, 31.106828],
        [114.124578, 30.300903],
        [114.572164, 30.625881],
        [114.79836, 30.67513],
        [114.125664, 30.695739],
        [114.085895, 30.701728],
        [114.530578, 30.572028],
        [114.551069, 30.69285],
        [114.723863, 30.619262],
        [114.097889, 30.361419],
        [114.066638, 30.344695],
        [114.155025, 30.146354],
        [113.869853, 30.465158],
        [114.137338, 30.542037],
        [113.96726, 30.370532],
        [113.826462, 30.425068],
        [114.378339, 30.803532],
        [114.574181, 30.639247],
        [114.304342, 30.65994],
        [113.77414, 30.355455],
        [114.533541, 30.835517],
        [114.071127, 30.362712],
        [114.311843, 30.673774],
        [114.337269, 30.591817],
        [114.283131, 30.6273],
        [114.379331, 30.507414],
        [114.459629, 30.774701],
        [114.140846, 30.448836],
        [114.318192, 30.627896],
        [114.385166, 30.698264],
        [114.295125, 30.63048],
        [114.300726, 30.673222],
        [114.25139, 30.5163],
        [114.568278, 30.571889],
        [114.271111, 30.445278],
        [114.484722, 30.768333],
        [114.4094, 31.2747],
        [114.2681, 31.2781],
        [114.353333, 30.921667],
        [115.042444, 31.187389],
        [114.761944, 30.9275],
        [114.855278, 30.805833],
        [114.485278, 30.606667],
        [114.216389, 30.446389],
        [114.3349, 31.0206],
        [114.4469, 31.0011],
        [114.705083, 30.77675],
        [114.730556, 30.611444],
        [114.896667, 30.886944],
        [114.171667, 30.238056],
        [113.966666, 31.251726],
        [114.096944, 30.359444],
        [114.173889, 30.509722],
        [114.016667, 30.650278],
        [114.299167, 30.631667],
        [113.983333, 30.301667],
        [114.025833, 30.404722],
        [114.4647, 30.7106],
        [114.2375, 30.3372],
        [114.3886, 30.5972],
        [114.325, 30.5058],
        [114.3086, 30.4414],
        [113.9647, 30.4764],
        [114.2934, 30.60266],
        [114.210567, 30.488233],
        [114.308333, 30.554167],
        [114.327733, 30.563225],
        [114.403889, 30.641111],
        [114.505833, 30.533333],
        [113.978333, 30.307778],
        [113.810556, 30.456667],
        [114.48306, 30.60444],
        [114.55, 30.467222],
        [114.323056, 30.263889],
        [114.448056, 30.441667],
        [114.3646, 30.98529],
        [114.228064, 30.877922],
        [114.0395, 30.501328],
        [114.828324, 30.780536],
        [114.715184, 30.783071]
    ];
    console.log("1111")
    var map = new BMap.Map("map", {
        enableBizAuthLogo: false,
        enableMapClick: false
    });


    // 创建点坐标
    var point = new BMap.Point(114.308999, 30.605181);
    // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(point, 10);
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    //添加比例尺
    map.addControl(new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
    }));
    map.setMapStyle({
        styleJson: [{
            "featureType": "road",
            "elementType": "all",
            "stylers": {
                "color": "#ffffff",
                "visibility": "off"
            }
        }]
    });
    let b_points = [];
    for (let i = 0; i < pos.length; i++) {
        let bp = new BMap.Point(pos[i][0], pos[i][1]);
        //自定义图标
        let size = new BMap.Size(15, 15);
        let myIcon = new BMap.Icon("../static/files/point.svg", size);
        // 创建标注
        let marker = new BMap.Marker(bp, {
            icon: myIcon
        });
        map.addOverlay(marker); //打点
        b_points.push(bp);

        // marker.setLabel(new BMap.Label(pos[i][0] + pos[i][1]));
    }
}
pointMap()