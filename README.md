# Collaborative 3D Detection Paper List

A curated reading list based on *Multi-Agent Collaborative 3D Object Detection: Paradigms, Enabling Techniques, Benchmarks, and Future Directions*. Papers follow the survey taxonomy and retain their original reference numbers.

> **139** references, including **89** papers with verified code or tooling repositories.

## Categories

- [Surveys & Background (8)](#category-01)
- [Single-Agent Foundations (16)](#category-02)
- [Collaborative Foundations (6)](#category-03)
- [Early Collaboration (5)](#category-04)
- [Intermediate · Dense Features (15)](#category-05)
- [Intermediate · Sparse & Efficient (12)](#category-06)
- [Intermediate · Object & Query (6)](#category-07)
- [Late Collaboration (2)](#category-08)
- [Hybrid Collaboration (3)](#category-09)
- [Spatiotemporal Alignment (13)](#category-10)
- [Communication & Fusion (6)](#category-11)
- [Heterogeneous Collaboration (10)](#category-12)
- [Trustworthy Collaboration (8)](#category-13)
- [Cross-Platform Collaboration (1)](#category-14)
- [Platforms & Tooling (8)](#category-15)
- [Datasets & Benchmarks (20)](#category-16)

---

<a id="category-01"></a>

## Surveys & Background

- **IEEE TPAMI 2020** · **[1] Deep Learning for 3D Point Clouds** (A Survey) [[paper](https://doi.org/10.48550/arXiv.1912.12033)]
- **IJCV 2023** · **[2] 3D Object Detection for Autonomous Driving** (A Comprehensive Survey) [[paper](https://doi.org/10.1007/s11263-023-01790-1)]
- **IJCV 2023** · **[3] Multi-Modal 3D Object Detection in Autonomous Driving** (A Survey) [[scholar](https://scholar.google.com/scholar?q=Multi-modal3Dobjectdetectioninautonomousdriving%3Aasurvey)]
- **2023** · **[33] Collaborative Perception in Autonomous Driving** (Methods, Datasets, and Challenges) [[scholar](https://scholar.google.com/scholar?q=Collaborative+perceptioninautonomousdriving%3AMethods%2Cdatasets%2Candchallenges)]
- **arXiv 2023** · **[49] Towards Vehicle-to-Everything Autonomous Driving** (A Survey on Collaborative Perception) [[paper](https://arxiv.org/abs/2308.16714)]
- **IEEE IV 2024** · **[35] A Survey on Intermediate Fusion Methods for Collaborative Perception Categorized by Real-World Challenges** [[paper](https://arxiv.org/abs/2404.16139)]
- **Proceedings of the IEEE 2025** · **[34] Vehicle-to-Everything Cooperative Perception for Autonomous Driving** [[paper](https://arxiv.org/abs/2310.03525)]
- **arXiv 2025** · **[36] Collaborative Perception Datasets for Autonomous Driving** (A Review) [[paper](https://arxiv.org/abs/2504.12696)]

[↑ Back to categories](#categories)

<a id="category-02"></a>

## Single-Agent Foundations

- **CVPR 2017** · **[17] PointNet** (Deep Learning on Point Sets for 3D Classification and Segmentation) [[scholar](https://scholar.google.com/scholar?q=PointNet%3ADeeplearning+onpointsetsfor3Dclassificationandsegmentation)] [[code](https://github.com/charlesq34/pointnet)]
- **NeurIPS 2017** · **[18] PointNet++** (Deep Hierarchical Feature Learning on Point Sets in a Metric Space) [[scholar](https://scholar.google.com/scholar?q=PointNet%2B%2B%3A+Deep+hierarchicalfeaturelearningonpointsetsinametricspace)] [[code](https://github.com/charlesq34/pointnet2)]
- **CVPR 2018** · **[4] VoxelNet** (End-to-End Learning for Point Cloud Based 3D Object Detection) [[scholar](https://scholar.google.com/scholar?q=VoxelNet%3AEnd-to-endlearningforpoint+cloudbased3Dobjectdetection)]
- **Sensors 2018** · **[6] SECOND** (Sparsely Embedded Convolutional Detection) [[scholar](https://scholar.google.com/scholar?q=SECOND%3ASparselyembeddedconvolutionaldetection)] [[code](https://github.com/traveller59/second.pytorch)]
- **CVPR 2018** · **[19] 3D Semantic Segmentation with Submanifold Sparse Convolutional Networks** [[scholar](https://scholar.google.com/scholar?q=3Dsemantic+segmentationwithsubmanifoldsparseconvolutionalnetworks)] [[code](https://github.com/facebookresearch/SparseConvNet)]
- **CVPR 2019** · **[5] PointPillars** (Fast Encoders for Object Detection from Point Clouds) [[scholar](https://scholar.google.com/scholar?q=PointPillars%3AFastencodersforobjectdetectionfrompoint+clouds)] [[code](https://github.com/nutonomy/second.pytorch)]
- **CVPR 2019** · **[7] PointRCNN** (3D Object Proposal Generation and Detection from Point Cloud) [[scholar](https://scholar.google.com/scholar?q=PointRCNN%3A+3D+object+proposal+generationanddetectionfrompointcloud)] [[code](https://github.com/sshaoshuai/PointRCNN)]
- **CVPR 2020** · **[8] 3DSSD** (Point-Based 3D Single Stage Object Detector) [[scholar](https://scholar.google.com/scholar?q=3DSSD%3APoint-based3Dsingle+stageobjectdetector)] [[code](https://github.com/JIA-Lab-research/3DSSD)]
- **CVPR 2020** · **[10] PV-RCNN** (Point-Voxel Feature Set Abstraction for 3D Object Detection) [[scholar](https://scholar.google.com/scholar?q=Pvrcnn%3APoint-voxelfeaturesetabstractionfor3Dobjectdetection)] [[code](https://github.com/open-mmlab/OpenPCDet)]
- **CVPR 2021** · **[12] Center-Based 3D Object Detection and Tracking** [[scholar](https://scholar.google.com/scholar?q=Center-based+3D+object+detectionandtracking)] [[code](https://github.com/tianweiy/CenterPoint)]
- **arXiv 2022** · **[13] BEVFusion** (Multi-Task Multi-Sensor Fusion with Unified Bird's-Eye View Representation) [[paper](https://arxiv.org/abs/2205.13542)] [[code](https://github.com/mit-han-lab/bevfusion)]
- **CVPR 2022** · **[14] TransFusion** (Robust LiDAR-Camera Fusion for 3D Object Detection with Transformers) [[scholar](https://scholar.google.com/scholar?q=Transfusion%3ARobustlidar-camerafusionfor3Dobjectdetection+withtransformers)] [[code](https://github.com/XuyangBai/TransFusion)]
- **NeurIPS 2022** · **[15] DeepInteraction** (3D Object Detection via Modality Interaction) [[scholar](https://scholar.google.com/scholar?q=Deepinteraction%3A3Dobjectdetectionviamodalityinteraction)] [[code](https://github.com/fudan-zvg/DeepInteraction)]
- **IEEE T-ITS 2023** · **[9] AnchorPoint** (Query Design for Transformer-Based 3D Object Detection and Tracking) [[paper](https://doi.org/10.1109/tits.2023.3282204)]
- **IJCV 2023** · **[11] PV-RCNN++** (Point-Voxel Feature Set Abstraction with Local Vector Representation for 3D Object Detection) [[scholar](https://scholar.google.com/scholar?q=Pv-rcnn%2B%2B%3APoint-voxelfeaturesetabstractionwithlocal+vector+representation+for+3D+object+detection)] [[code](https://github.com/open-mmlab/OpenPCDet)]
- **CVPR 2023** · **[16] FUTR3D** (A Unified Sensor Fusion Framework for 3D Detection) [[scholar](https://scholar.google.com/scholar?q=FUTR3D%3A+Aunifiedsensorfusionframeworkfor3Ddetection)] [[code](https://github.com/Tsinghua-MARS-Lab/futr3d)]

[↑ Back to categories](#categories)

<a id="category-03"></a>

## Collaborative Foundations

- **IEEE T-ITS 2020** · **[20] Cooperative Perception for 3D Object Detection in Driving Scenarios Using Infrastructure Sensors** [[paper](https://arxiv.org/pdf/1912.12147)]
- **ICRA 2022** · **[21] OPV2V** (An Open Benchmark Dataset and Fusion Pipeline for Perception with Vehicle-to-Vehicle Communication) [[scholar](https://scholar.google.com/scholar?q=Opv2v%3A+An+openbenchmarkdatasetandfusionpipelineforperceptionwith+vehicle-to-vehicle+communication)] [[code](https://github.com/DerrickXuNu/OpenCOOD)]
- **ECCV 2022** · **[22] V2X-ViT** (Vehicle-to-Everything Cooperative Perception with Vision Transformer) [[paper](https://doi.org/10.1007/978-3-031-19842-7_7)] [[code](https://github.com/DerrickXuNu/v2x-vit)]
- **CVPR 2022** · **[23] DAIR-V2X** (A Large-Scale Dataset for Vehicle-Infrastructure Cooperative 3D Object Detection) [[scholar](https://scholar.google.com/scholar?q=Dair-v2x%3AAlarge-scaledatasetforvehicleinfrastructure+cooperative+3D+object+detection)] [[code](https://github.com/AIR-THU/DAIR-V2X)]
- **CVPR 2023** · **[24] V2V4Real** (A Real-World Large-Scale Dataset for Vehicle-to-Vehicle Cooperative Perception) [[scholar](https://scholar.google.com/scholar?q=V2v4real%3A+A+real-world+large-scale+datasetforvehicle-to-vehiclecooperativeperception)] [[code](https://github.com/ucla-mobility/V2V4Real)]
- **CVPR 2023** · **[25] Collaboration Helps Camera Overtake LiDAR in 3D Detection** [[scholar](https://scholar.google.com/scholar?q=Collaboration+helpscameraovertakelidarin3Ddetection)] [[code](https://github.com/DerrickXuNu/CoBEVT)]

[↑ Back to categories](#categories)

<a id="category-04"></a>

## Early Collaboration

- **ICDCS 2019** · **[37] Cooper** (Cooperative Perception for Connected Autonomous Vehicles Based on 3D Point Clouds) [[scholar](https://scholar.google.com/scholar?q=Cooper%3A+Cooperative+perceptionforconnectedautonomousvehiclesbasedon3Dpoint+clouds)] [[code](https://github.com/Aug583/F-COOPER)]
- **arXiv 2021** · **[38] AutoCast** (Scalable Infrastructure-Less Cooperative Perception for Distributed Collaborative Driving) [[paper](https://arxiv.org/abs/2112.14947)] [[code](https://github.com/hangqiu/AutoCast)]
- **2024** · **[50] KeyCoop** (Communication-Efficient Raw-Level Cooperative Perception for Connected Autonomous Vehicles via Keypoints Extraction) [[scholar](https://scholar.google.com/scholar?q=Keycoop%3A+Communication-efficient+raw-level+cooperative+perception+for+connected+autonomous+vehicles+via+keypoints+extraction)]
- **ICRA 2025** · **[51] Planning-Oriented Cooperative Perception Among Heterogeneous Vehicles** [[scholar](https://scholar.google.com/scholar?q=Planning-oriented+cooperative+perceptionamongheterogeneousvehicles)]
- **arXiv 2026** · **[52] CoLC** (Communication-Efficient Collaborative Perception with LiDAR Completion) [[paper](https://arxiv.org/abs/2603.00682)] [[code](https://github.com/CatOneTwo/CoLC)]

[↑ Back to categories](#categories)

<a id="category-05"></a>

## Intermediate · Dense Features

- **2019** · **[39] F-Cooper** (Feature-Based Cooperative Perception for Autonomous Vehicle Edge Computing Using 3D Point Clouds) [[paper](https://arxiv.org/pdf/1909.06459)] [[code](https://github.com/Aug583/F-COOPER)]
- **ECCV 2020** · **[53] V2VNet** (Vehicle-to-Vehicle Communication for Joint Perception and Prediction) [[scholar](https://scholar.google.com/scholar?q=V2vnet%3AVehicle-to-vehiclecommunicationforjoint+perceptionandprediction)] [[code](https://github.com/coperception/coperception)]
- **NeurIPS 2021** · **[54] Learning Distilled Collaboration Graph for Multi-Agent Perception** [[scholar](https://scholar.google.com/scholar?q=Learning+distilled+collaboration+graph+for+multi-agent+perception)] [[code](https://github.com/ai4ce/DiscoNet)]
- **CoRL 2022** · **[57] Cooperative Bird's Eye View Semantic Segmentation with Sparse Transformers** [[scholar](https://scholar.google.com/scholar?q=Cooperative+bird%E2%80%99s+eye+view+semantic+segmentation+with+sparse+transformers)] [[code](https://github.com/DerrickXuNu/CoBEVT)]
- **ACM MM 2022** · **[58] Complementarity-Enhanced and Redundancy-Minimized Collaboration Network for Multi-Agent Perception** [[scholar](https://scholar.google.com/scholar?q=Complementarityenhancedandredundancy-minimizedcollaborationnetworkfor+multi-agentperception)]
- **ICCV 2023** · **[56] TransIFF** (An Instance-Level Feature Fusion Framework for Vehicle-Infrastructure Cooperative 3D Detection with Transformers) [[scholar](https://scholar.google.com/scholar?q=Transiff%3A+An+instance-level+feature+fusion+framework+for+vehicle-infrastructure+cooperative+3D+detectionwithtransformers)]
- **IEEE T-ITS 2023** · **[59] V2VFormer++** (Multi-Modal Vehicle-to-Vehicle Cooperative Perception via Global-Local Transformer) [[scholar](https://scholar.google.com/scholar?q=V2vformer%2B%2B%3A+Multi-modal+vehicle-to-vehicle+cooperative+perceptionviaglobal-localtransformer)]
- **IEEE TPAMI 2024** · **[55] V2X-ViT v2** (Improved Vision Transformers for Vehicle-to-Everything Cooperative Perception) [[scholar](https://scholar.google.com/scholar?q=V2x-vitv2%3AImproved+visiontransformersforvehicle-to-everythingcooperativeperception)] [[code](https://github.com/DerrickXuNu/OpenCOOD)]
- **IEEE T-IV 2024** · **[60] CoRange** (Collaborative Range-Aware Adaptive Fusion for Multi-Agent Perception) [[scholar](https://scholar.google.com/scholar?q=Corange%3ACollaborativerange-awareadaptivefusionformulti-agentperception)]
- **ICRA 2024** · **[62] EMIFF** (Enhanced Multi-Scale Image Feature Fusion for Vehicle-Infrastructure Cooperative 3D Object Detection) [[scholar](https://scholar.google.com/scholar?q=Emiff%3AEnhancedmulti-scaleimagefeaturefusionfor+vehicle-infrastructurecooperative3Dobjectdetection)] [[code](https://github.com/Bosszhe/EMIFF)]
- **arXiv 2024** · **[63] ParCon** (Noise-Robust Collaborative Perception via Multi-Module Parallel Connection) [[paper](https://arxiv.org/abs/2407.11546)]
- **2025** · **[61] Occlusion-Guided Multi-Modal Fusion for Vehicle-Infrastructure Cooperative 3D Object Detection** [[scholar](https://scholar.google.com/scholar?q=Occlusionguidedmulti-modalfusionforvehicle-infrastructurecooperative+3Dobjectdetection)]
- **IEEE RA-L 2025** · **[64] CoST** (Efficient Collaborative Perception from a Unified Spatiotemporal Perspective) [[paper](https://arxiv.org/abs/2508.00359)] [[code](https://github.com/tzhhhh123/CoST)]
- **ICCV 2025** · **[65] DATA** (Domain-and-Time Alignment for High-Quality Feature Fusion in Collaborative Perception) [[scholar](https://scholar.google.com/scholar?q=Data%3A+Domain-and-time+alignment+for+high-quality+featurefusionincollaborativeperception)] [[code](https://github.com/ChengchangTian/DATA)]
- **arXiv 2026** · **[66] CATNet** (Collaborative Alignment and Transformation Network for Cooperative Perception) [[paper](https://arxiv.org/abs/2603.05255)]

[↑ Back to categories](#categories)

<a id="category-06"></a>

## Intermediate · Sparse & Efficient

- **NeurIPS 2022** · **[26] Where2comm** (Communication-Efficient Collaborative Perception via Spatial Confidence Maps) [[paper](https://arxiv.org/abs/2209.12836)] [[code](https://github.com/MediaBrain-SJTU/where2comm)]
- **IEEE RA-L 2022** · **[73] Keypoints-Based Deep Feature Fusion for Cooperative Vehicle Detection of Autonomous Driving** [[scholar](https://scholar.google.com/scholar?q=Keypoints-baseddeepfeature+fusionforcooperativevehicledetectionofautonomousdriving)] [[code](https://github.com/YuanYunshuang/FPV_RCNN)]
- **NeurIPS 2023** · **[27] How2comm** (Communication-Efficient and Collaboration-Pragmatic Multi-Agent Perception) [[paper](https://openreview.net/forum?id=Dbaxm9ujq6)] [[code](https://github.com/ydk122024/How2comm)]
- **ICCV 2023** · **[68] UMC** (A Unified Bandwidth-Efficient and Multi-Resolution Based Collaborative Perception Framework) [[paper](https://arxiv.org/abs/2303.12400)] [[code](https://github.com/ispc-lab/UMC)]
- **CVPR 2024** · **[70] Communication-Efficient Collaborative Perception via Information Filling with Codebook** [[paper](https://arxiv.org/abs/2405.04966)] [[code](https://github.com/PhyllisH/CodeFilling)]
- **arXiv 2025** · **[67] Fast2comm** (Collaborative Perception Combined with Prior Knowledge) [[paper](https://arxiv.org/abs/2505.00740)]
- **arXiv 2025** · **[69] EffiComm** (Bandwidth-Efficient Multi-Agent Communication) [[paper](https://arxiv.org/abs/2507.19354)]
- **arXiv 2025** · **[71] QuantV2X** (A Fully Quantized Multi-Agent System for Cooperative Perception) [[paper](https://arxiv.org/abs/2509.03704)] [[code](https://github.com/ucla-mobility/QuantV2X)]
- **ICRA 2025** · **[72] DiffCP** (Ultra-Low-Bit Collaborative Perception via Diffusion Model) [[scholar](https://scholar.google.com/scholar?q=Diffcp%3A+Ultra-low+bit+collaborative+perception+via+diffusionmodel)]
- **2025** · **[74] SparseComm** (An Efficient Sparse Communication Framework for Vehicle-Infrastructure Cooperative 3D Detection) [[scholar](https://scholar.google.com/scholar?q=Sparsecomm%3AAnefficientsparsecommunicationframeworkforvehicleinfrastructurecooperative3Ddetection)]
- **CVPR 2025** · **[75] SparseAlign** (A Fully Sparse Framework for Cooperative Object Detection) [[scholar](https://scholar.google.com/scholar?q=Sparsealign%3AAfully+sparse+framework+for+cooperative+object+detection)] [[code](https://github.com/YuanYunshuang/SparseAlign)]
- **arXiv 2026** · **[76] WhisperNet** (A Scalable Solution for Bandwidth-Efficient Collaboration) [[paper](https://arxiv.org/abs/2603.01708)]

[↑ Back to categories](#categories)

<a id="category-07"></a>

## Intermediate · Object & Query

- **IEEE RA-L 2023** · **[79] CenterCoop** (Center-Based Feature Aggregation for Communication-Efficient Vehicle-Infrastructure Cooperative 3D Object Detection) [[scholar](https://scholar.google.com/scholar?q=Centercoop%3ACenter-basedfeature+aggregation+for+communication-efficient+vehicle-infrastructure+cooperative+3D+object+detection)]
- **ICRA 2024** · **[77] QUEST** (Query Stream for Practical Cooperative Perception) [[scholar](https://scholar.google.com/scholar?q=Quest%3AQuerystream+forpracticalcooperativeperception)] [[code](https://github.com/leofansq/QUEST)]
- **arXiv 2025** · **[78] CoopDETR** (A Unified Cooperative Perception Framework for 3D Detection via Object Query) [[paper](https://arxiv.org/abs/2502.19313)]
- **arXiv 2025** · **[80] CoCMT** (Communication-Efficient Cross-Modal Transformer for Collaborative Perception) [[paper](https://arxiv.org/abs/2503.13504)] [[code](https://github.com/taco-group/COCMT)]
- **arXiv 2025** · **[81] Which2comm** (An Efficient Collaborative Perception Framework for 3D Object Detection) [[paper](https://arxiv.org/abs/2503.17175)]
- **ICCV 2025** · **[82] INSTINCT** (Instance-Level Interaction Architecture for Query-Based Collaborative Perception) [[scholar](https://scholar.google.com/scholar?q=Instinct%3AInstancelevel+interaction+architecture+for+query-based+collaborative+perception)] [[code](https://github.com/CrazyShout/INSTINCT)]

[↑ Back to categories](#categories)

<a id="category-08"></a>

## Late Collaboration

- **arXiv 2022** · **[83] Model-Agnostic Multi-Agent Perception Framework** [[paper](https://arxiv.org/abs/2203.13168)] [[code](https://github.com/DerrickXuNu/model_anostic)]
- **arXiv 2025** · **[84] A Late Collaborative Perception Framework for 3D Multi-Object and Multi-Source Association and Fusion** [[paper](https://arxiv.org/abs/2507.02430)]

[↑ Back to categories](#categories)

<a id="category-09"></a>

## Hybrid Collaboration

- **arXiv 2025** · **[85] Communication-Efficient Multi-Agent 3D Detection via Hybrid Collaboration** [[paper](https://arxiv.org/abs/2508.07092)]
- **ICCV 2025** · **[86] mmCooper** (A Multi-Agent Multi-Stage Communication-Efficient and Collaboration-Robust Cooperative Perception Framework) [[scholar](https://scholar.google.com/scholar?q=mmcooper%3AAmulti-agentmulti-stagecommunication-efficient+andcollaboration-robustcooperativeperceptionframework)]
- **CVPR 2025** · **[87] CoSDH** (Communication-Efficient Collaborative Perception via Supply-Demand Awareness and Intermediate-Late Hybridization) [[scholar](https://scholar.google.com/scholar?q=Cosdh%3ACommunicationefficientcollaborativeperceptionviasupply-demandawareness+and+intermediate-late+hybridization)] [[code](https://github.com/Xu2729/CoSDH)]

[↑ Back to categories](#categories)

<a id="category-10"></a>

## Spatiotemporal Alignment

- **CoRL 2021** · **[88] Learning to Communicate and Correct Pose Errors** [[scholar](https://scholar.google.com/scholar?q=Learning+tocommunicateandcorrectposeerrors)] [[code](https://github.com/yifanlu0227/CoAlign)]
- **ECCV 2022** · **[40] Latency-Aware Collaborative Perception** [[scholar](https://scholar.google.com/scholar?q=Latency-aware+collaborativeperception)] [[code](https://github.com/MediaBrain-SJTU/SyncNet)]
- **arXiv 2022** · **[89] Robust Collaborative 3D Object Detection in the Presence of Pose Errors** [[paper](https://arxiv.org/abs/2211.07214)] [[code](https://github.com/yifanlu0227/CoAlign)]
- **arXiv 2023** · **[28] Vehicle-Infrastructure Cooperative 3D Object Detection via Feature Flow Prediction** [[paper](https://arxiv.org/abs/2303.10552)] [[code](https://github.com/haibao-yu/FFNet-VIC3D)]
- **NeurIPS 2023** · **[41] Asynchrony-Robust Collaborative Perception via Bird's Eye View Flow** [[paper](https://arxiv.org/abs/2309.16940)] [[code](https://github.com/MediaBrain-SJTU/CoBEVFlow)]
- **NeurIPS 2023** · **[91] Asynchrony-Robust Collaborative Perception via Bird's Eye View Flow** [[paper](https://arxiv.org/abs/2309.16940)] [[code](https://github.com/MediaBrain-SJTU/CoBEVFlow)]
  - Note: Duplicate of reference [41] in the source bibliography.
- **ECCV 2024** · **[90] Align Before Collaborate** (Mitigating Feature Misalignment for Robust Multi-Agent Perception) [[scholar](https://scholar.google.com/scholar?q=Align+before+collaborate%3A+Mitigating+feature+misalignment+for+robust+multi-agent+perception)]
- **2024** · **[92] FETR** (Feature Transformer for Vehicle-Infrastructure Cooperative 3D Object Detection) [[scholar](https://scholar.google.com/scholar?q=Fetr%3AFeaturetransformer+forvehicle-infrastructurecooperative3Dobjectdetection)]
- **arXiv 2024** · **[95] V2X-PC** (Vehicle-to-Everything Collaborative Perception via Point Cluster) [[paper](https://arxiv.org/abs/2403.16635)]
- **CVPR 2024** · **[96] Multi-Agent Collaborative Perception via Motion-Aware Robust Communication Network** [[scholar](https://scholar.google.com/scholar?q=Multi-agentcollaborative+perceptionviamotion-awarerobustcommunicationnetwork)] [[code](https://github.com/IndigoChildren/collaborative-perception-MRCNet)]
- **CVPR 2025** · **[42] TraF-Align** (Trajectory-Aware Feature Alignment for Asynchronous Multi-Agent Perception) [[scholar](https://scholar.google.com/scholar?q=Traf-align%3ATrajectory-aware+featurealignmentforasynchronousmulti-agentperception)] [[code](https://github.com/zhyingS/TraF-Align)]
- **arXiv 2025** · **[93] Fresh2comm** (Information-Freshness-Optimized Collaborative Perception) [[paper](https://arxiv.org/abs/2502.07852)]
- **IEEE T-ITS 2025** · **[94] COSTFE** (Spatio-Temporal Feature Enhancement for Collaborative Perception) [[scholar](https://scholar.google.com/scholar?q=Costfe%3A+Spatio-temporal+feature+enhancement+for+collaborative+perception)]

[↑ Back to categories](#categories)

<a id="category-11"></a>

## Communication & Fusion

- **ICRA 2020** · **[97] Who2com** (Collaborative Perception via Learnable Handshake Communication) [[scholar](https://scholar.google.com/scholar?q=Who2com%3A+Collaborative+perception+via+learnable+handshake+communication)] [[code](https://github.com/GT-RIPL/MultiAgentPerception)]
- **CVPR 2020** · **[98] When2com** (Multi-Agent Perception via Communication Graph Grouping) [[paper](https://arxiv.org/abs/2006.00176)] [[code](https://github.com/GT-RIPL/MultiAgentPerception)]
- **2024** · **[47] Task-Oriented Communication for Vehicle-to-Infrastructure Cooperative Perception** [[scholar](https://scholar.google.com/scholar?q=Task-oriented+communication+for+vehicle-to-infrastructure+cooperative+perception)]
- **arXiv 2024** · **[99] CoMamba** (Real-Time Cooperative Perception Unlocked with State Space Models) [[paper](https://arxiv.org/abs/2409.10699)] [[code](https://github.com/taco-group/CoMamba)]
- **IEEE RA-L 2024** · **[100] CollaMamba** (Efficient Collaborative Perception with Cross-Agent Spatial-Temporal State Space Model) [[paper](https://arxiv.org/abs/2409.07714)]
- **IEEE RA-L 2025** · **[46] V2XPnP** (Vehicle-to-Everything Spatio-Temporal Fusion for Multi-Agent Perception and Prediction) [[scholar](https://scholar.google.com/scholar?q=V2xpnp%3AVehicle-to-everything+spatio-temporal+fusion+for+multi-agent+perception+and+prediction)] [[code](https://github.com/Zewei-Zhou/V2XPnP)]

[↑ Back to categories](#categories)

<a id="category-12"></a>

## Heterogeneous Collaboration

- **ICCV 2023** · **[29] HM-ViT** (Hetero-Modal Vehicle-to-Vehicle Cooperative Perception with Vision Transformer) [[paper](https://arxiv.org/abs/2304.10628)] [[code](https://github.com/XHwind/HM-ViT)]
- **ICLR 2024** · **[30] An Extensible Framework for Open Heterogeneous Collaborative Perception** [[paper](https://arxiv.org/abs/2401.13964)] [[code](https://github.com/yifanlu0227/HEAL)]
- **AAAI 2024** · **[101] DI-V2X** (Learning Domain-Invariant Representation for Vehicle-Infrastructure Collaborative 3D Object Detection) [[paper](https://arxiv.org/abs/2312.15742)] [[code](https://github.com/Serenos/DI-V2X)]
- **ECCV 2024** · **[104] HeteCooper** (Feature Collaboration Graph for Heterogeneous Collaborative Perception) [[scholar](https://scholar.google.com/scholar?q=Hetecooper%3AFeaturecollaborationgraphforheterogeneouscollaborativeperception)]
- **ECCV 2024** · **[105] HEAD** (A Bandwidth-Efficient Cooperative Perception Approach for Heterogeneous Connected and Autonomous Vehicles) [[scholar](https://scholar.google.com/scholar?q=Head%3A+A+bandwidth-efficient+cooperative+perception+approach+for+heterogeneous+connected+and+autonomous+vehicles)]
- **CVPR 2025** · **[102] V2X-R** (Cooperative LiDAR-4D Radar Fusion with Denoising Diffusion for 3D Object Detection) [[scholar](https://scholar.google.com/scholar?q=V2x-r%3A+Cooperative+lidar-4D+radar+fusion+with+denoisingdiffusionfor3Dobjectdetection)] [[code](https://github.com/ylwhxht/V2X-R)]
- **CVPR 2025** · **[106] One Is Plenty** (A Polymorphic Feature Interpreter for Immutable Heterogeneous Collaborative Perception) [[scholar](https://scholar.google.com/scholar?q=Oneisplenty%3AApolymorphicfeatureinterpreterfor+immutable+heterogeneous+collaborative+perception)] [[code](https://github.com/yuchen-xia/PolyInter)]
- **IEEE T-ITS 2025** · **[107] QCTF** (A Quantized Communication and Transferable Fusion Framework for Multi-Agent Collaborative Perception) [[scholar](https://scholar.google.com/scholar?q=Qctf%3AAquantized+communication+and+transferable+fusion+framework+for+multiagentcollaborativeperception)]
- **arXiv 2026** · **[103] Linking Modality Isolation in Heterogeneous Collaborative Perception** [[paper](https://arxiv.org/abs/2603.00609)] [[code](https://github.com/cxliu0314/CodeAlign)]
- **arXiv 2026** · **[108] OpenCOOD-Air** (Prompting Heterogeneous Ground-Air Collaborative Perception with Spatial Conversion and Offset Prediction) [[paper](https://arxiv.org/abs/2603.13919)]

[↑ Back to categories](#categories)

<a id="category-13"></a>

## Trustworthy Collaboration

- **arXiv 2022** · **[109] Uncertainty Quantification of Collaborative Detection for Self-Driving** [[paper](https://arxiv.org/abs/2209.08162)] [[code](https://github.com/coperception/double-m-quantification)]
- **CVPR 2024** · **[31] ERMVP** (Communication-Efficient and Collaboration-Robust Multi-Vehicle Perception in Challenging Environments) [[scholar](https://scholar.google.com/scholar?q=Ermvp%3A+Communication-efficient+and+collaboration-robust+multivehicleperceptioninchallengingenvironments)] [[code](https://github.com/Terry9a/ERMVP)]
- **IEEE T-ITS 2025** · **[110] Efficient Collaborative Perception with Integrated Uncertainty Estimation via Evidence Regression** [[scholar](https://scholar.google.com/scholar?q=Efficient+collaborativeperceptionwithintegrateduncertaintyestimationvia+evidenceregression)]
- **CVPR 2025** · **[111] RCP-Bench** (Benchmarking Robustness for Collaborative Perception Under Diverse Corruptions) [[scholar](https://scholar.google.com/scholar?q=Rcp-bench%3ABenchmarkingrobustnessforcollaborative+perception+under+diverse+corruptions)] [[code](https://github.com/LuckyDush/RCP-Bench)]
- **arXiv 2025** · **[112] CoopDiff** (Anticipating 3D Human-Object Interactions via Contact-Consistent Decoupled Diffusion) [[paper](https://arxiv.org/abs/2508.07162)]
- **ICCV 2025** · **[113] Pretend Benign** (A Stealthy Adversarial Attack by Exploiting Vulnerabilities in Cooperative Perception) [[scholar](https://scholar.google.com/scholar?q=Pretend+benign%3A+A+stealthy+adversarial+attack+by+exploiting+vulnerabilitiesincooperativeperception)]
- **arXiv 2026** · **[32] Learning Mutual View Information Graph for Adaptive Adversarial Collaborative Perception** [[paper](https://arxiv.org/abs/2602.19596)] [[code](https://github.com/yihangtao/MVIG)]
- **arXiv 2026** · **[48] All Vehicles Can Lie** (Efficient Adversarial Defense in Fully Untrusted-Vehicle Collaborative Perception via Pseudo-Random Bayesian Inference) [[paper](https://arxiv.org/abs/2603.08498)]

[↑ Back to categories](#categories)

<a id="category-14"></a>

## Cross-Platform Collaboration

- **2025** · **[43] UVCPNet** (A UAV-Vehicle Collaborative Perception Network for 3D Object Detection) [[scholar](https://scholar.google.com/scholar?q=Uvcpnet%3A+A+uav-vehicle+collaborative+perception+networkfor3Dobjectdetection)]

[↑ Back to categories](#categories)

<a id="category-15"></a>

## Platforms & Tooling

- **Publication** · **[120] CoPerception** (An SDK for Multi-Agent Collaborative Perception) [[paper](https://github.com/coperception/coperception)] [[code](https://github.com/coperception/coperception)]
- **Publication** · **[121] ns-3** (A Discrete-Event Network Simulator for Internet Systems) [[paper](https://www.nsnam.org/)] [[code](https://github.com/nsnam/ns-3-dev-git)]
- **CoRL 2017** · **[114] CARLA** (An Open Urban Driving Simulator) [[scholar](https://scholar.google.com/scholar?q=Carla%3A+An+open+urban+driving+simulator)] [[code](https://github.com/carla-simulator/carla)]
- **2017** · **[116] AirSim** (High-Fidelity Visual and Physical Simulation for Autonomous Vehicles) [[scholar](https://scholar.google.com/scholar?q=Airsim%3AHigh-fidelity+visualandphysicalsimulationforautonomousvehicles)] [[code](https://github.com/microsoft/AirSim)]
- **2018** · **[118] Microscopic Traffic Simulation Using SUMO** [[scholar](https://scholar.google.com/scholar?q=Microscopictrafficsimulationusingsumo)] [[code](https://github.com/eclipse-sumo/sumo)]
- **2020** · **[115] LGSVL Simulator** (A High-Fidelity Simulator for Autonomous Driving) [[scholar](https://scholar.google.com/scholar?q=Lgsvlsimulator%3AA+high+fidelity+simulator+for+autonomous+driving)] [[code](https://github.com/lgsvl/simulator)]
- **2021** · **[117] OpenCDA** (An Open Cooperative Driving Automation Framework Integrated with Co-Simulation) [[scholar](https://scholar.google.com/scholar?q=Opencda%3Aan+opencooperativedrivingautomationframeworkintegratedwith+co-simulation)] [[code](https://github.com/ucla-mobility/OpenCDA)]
- **CVPR 2022** · **[119] Coopernaut** (End-to-End Driving with Cooperative Perception for Networked Vehicles) [[scholar](https://scholar.google.com/scholar?q=Coopernaut%3A+End-to-end+driving+with+cooperative+perception+for+networked+vehicles)] [[code](https://github.com/UT-Austin-RPL/Coopernaut)]

[↑ Back to categories](#categories)

<a id="category-16"></a>

## Datasets & Benchmarks

- **IEEE RA-L 2022** · **[125] V2X-Sim** (Multi-Agent Collaborative Perception Dataset and Benchmark for Autonomous Driving) [[scholar](https://scholar.google.com/scholar?q=V2x-sim%3AMulti-agentcollaborativeperceptiondataset+and+benchmark+for+autonomous+driving)] [[code](https://github.com/ai4ce/V2X-Sim)]
- **2022** · **[126] DOLPHINS** (Dataset for Collaborative Perception Enabled Harmonious and Interconnected Self-Driving) [[paper](https://arxiv.org/abs/2207.07609)] [[code](https://github.com/explosion5/Dolphins)]
- **CVPR 2023** · **[132] V2X-Seq** (A Large-Scale Sequential Dataset for Vehicle-Infrastructure Cooperative Perception and Forecasting) [[scholar](https://scholar.google.com/scholar?q=V2x-seq%3AAlarge-scalesequentialdatasetfor+vehicle-infrastructurecooperativeperceptionandforecasting)] [[code](https://github.com/AIR-THU/DAIR-V2X-Seq)]
- **ICLR 2024** · **[127] An Extensible Framework for Open Heterogeneous Collaborative Perception** [[paper](https://arxiv.org/abs/2401.13964)] [[code](https://github.com/yifanlu0227/HEAL)]
  - Note: Duplicate of reference [30] in the source bibliography.
- **arXiv 2024** · **[128] Multi-V2X** (A Large-Scale Multi-Modal Multi-Penetration-Rate Dataset for Cooperative Perception) [[paper](https://arxiv.org/abs/2409.04980)] [[code](https://github.com/RadetzkyLi/Multi-V2X)]
- **AAAI 2024** · **[129] DeepAccident** (A Motion and Accident Prediction Benchmark for V2X Autonomous Driving) [[scholar](https://scholar.google.com/scholar?q=Deepaccident%3A+A+motion+and+accident+prediction+benchmarkforv2xautonomousdriving)] [[code](https://github.com/tianqi-wang1996/DeepAccident)]
- **arXiv 2024** · **[130] Adver-City** (Open-Source Multi-Modal Dataset for Collaborative Perception Under Adverse Weather Conditions) [[paper](https://arxiv.org/abs/2410.06380)] [[code](https://github.com/QUARRG/Adver-City)]
- **arXiv 2024** · **[131] WHALES** (A Multi-Agent Scheduling Dataset for Enhanced Cooperation in Autonomous Driving) [[paper](https://arxiv.org/abs/2411.13340)] [[code](https://github.com/chensiweiTHU/WHALES)]
- **CVPR 2024** · **[133] TUMTraf V2X Cooperative Perception Dataset** [[paper](https://arxiv.org/abs/2403.01316)] [[code](https://github.com/tum-traffic-dataset/tum-traffic-dataset-dev-kit)]
- **CVPR 2024** · **[134] RCooper** (A Real-World Large-Scale Dataset for Roadside Cooperative Perception) [[paper](https://arxiv.org/abs/2403.10145)] [[code](https://github.com/AIR-THU/DAIR-RCooper)]
- **ECCV 2024** · **[135] V2X-Real** (A Large-Scale Dataset for Vehicle-to-Everything Cooperative Perception) [[paper](https://arxiv.org/abs/2403.16034)] [[code](https://github.com/ucla-mobility/V2X-Real)]
- **CVPR 2024** · **[139] HoloVIC** (Large-Scale Dataset and Benchmark for Multi-Sensor Holographic Intersection and Vehicle-Infrastructure Cooperation) [[paper](https://openaccess.thecvf.com/content/CVPR2024/html/Ma_HoloVIC_Large-scale_Dataset_and_Benchmark_for_Multi-Sensor_Holographic_Intersection_and_CVPR_2024_paper.html)]
- **arXiv 2025** · **[124] V2X-ReaLO** (An Open Online Framework and Dataset for Cooperative Perception in Reality) [[paper](https://arxiv.org/abs/2503.10034)]
- **ICCV 2025** · **[136] MixedSignals** (A Diverse Point Cloud Dataset for Heterogeneous LiDAR V2X Collaboration) [[scholar](https://scholar.google.com/scholar?q=Mixedsignals%3AAdiversepointclouddatasetforheterogeneous+lidarv2xcollaboration)] [[code](https://github.com/acfr/Mixed-Signals-Dataset)]
- **ICCV 2025** · **[137] V2XScenes** (A Multiple-Challenging-Traffic-Conditions Dataset for Large-Range Vehicle-Infrastructure Collaborative Perception) [[scholar](https://scholar.google.com/scholar?q=V2xscenes%3AAmultiplechallengingtrafficconditionsdataset+for+large-range+vehicle-infrastructure+collaborative+perception)] [[code](https://github.com/ADVRC-Wangbw/V2XScenes)]
- **AAAI 2026** · **[44] Griffin** (Aerial-Ground Cooperative Detection and Tracking Dataset and Benchmark) [[scholar](https://scholar.google.com/scholar?q=Griffin%3A+Aerial-ground+cooperative+detectionandtrackingdatasetandbenchmark)] [[code](https://github.com/wang-jh18-SVM/Griffin)]
- **arXiv 2026** · **[45] V2U4Real** (A Real-World Large-Scale Dataset for Vehicle-to-UAV Cooperative Perception) [[paper](https://arxiv.org/abs/2603.25275)] [[code](https://github.com/VjiaLi/V2U4Real)]
- **WACV 2026** · **[122] V2XScene** (Multi-View Consistent 3D Scene Simulation for Collaborative Perception) [[scholar](https://scholar.google.com/scholar?q=V2xscene%3AMulti-viewconsistent3d+scenesimulationforcollaborativeperception)] [[code](https://github.com/deyang2000/V2XScene)]
- **arXiv 2026** · **[123] SimBEV2X** (A Large-Scale Dataset and Data Generation Tool for Multi-Task Vehicle-to-Everything Cooperative Perception) [[paper](https://arxiv.org/abs/2607.23910)] [[code](https://github.com/GoodarzMehr/SimBEV2X)]
- **CVPR 2026** · **[138] CATS-V2V** (A Real-World Vehicle-to-Vehicle Cooperative Perception Dataset with Complex Adverse Traffic Scenarios) [[scholar](https://scholar.google.com/scholar?q=Cats-v2v%3A+A+real-world+vehicle-to-vehicle+cooperativeperceptiondatasetwithcomplexadversetrafficscenarios)]

[↑ Back to categories](#categories)
