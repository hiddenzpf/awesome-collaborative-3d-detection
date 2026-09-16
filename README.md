# Collaborative 3D Detection Paper List

A curated reading list based on *Multi-Agent Collaborative 3D Object Detection: Paradigms, Enabling Techniques, Benchmarks, and Future Directions*. Papers follow the survey taxonomy and retain their original reference numbers.

> **139** references, including **52** papers with verified code or tooling repositories.

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

*arXiv 2025*  
**[36] Collaborative Perception Datasets for Autonomous Driving: A Review**  
N.Wang, D.Shang, Y.Gong, X.Hu, Z.Song, L.Yang, Y.Huang, X. Wang, and J. Lu  
[[Paper](https://arxiv.org/abs/2504.12696)]

*IEEE IV 2024*  
**[35] A Survey on Intermediate Fusion Methods for Collaborative Perception Categorized by Real-World Challenges**  
M. Yazgan, T. Graf, M. Liu, T. Fleck, and J. M. Zöllner  
[[Paper](https://arxiv.org/abs/2404.16139)]

*IJCV 2023*  
**[2] 3D Object Detection for Autonomous Driving: A Comprehensive Survey**  
J. Mao, S. Shi, X. Wang, and H. Li  
[[Paper](https://doi.org/10.1007/s11263-023-01790-1)]

*IJCV 2023*  
**[3] Multi-Modal 3D Object Detection in Autonomous Driving: A Survey**  
Y. Wang, Q. Mao, H. Zhu, J. Deng, Y. Zhang, J. Ji, H. Li, and Y.Zhang  
[[Scholar](https://scholar.google.com/scholar?q=Multi-modal3Dobjectdetectioninautonomousdriving%3Aasurvey)]

*2023*  
**[33] Collaborative Perception in Autonomous Driving: Methods, Datasets, and Challenges**  
Y.Han, H.Zhang, H.Li, Y.Jin, C.Lang, andY.Li  
[[Scholar](https://scholar.google.com/scholar?q=Collaborative+perceptioninautonomousdriving%3AMethods%2Cdatasets%2Candchallenges)]

*arXiv 2023*  
**[34] V2X Cooperative Perception for Autonomous Driving: Recent Advances and Challenges**  
T. Huang, J. Liu, X. Zhou, D. C. Nguyen, M. R. Azghadi, Y. Xia, Q.-L. Han, and S. Sun  
[[Paper](https://arxiv.org/abs/2310.03525)]

*arXiv 2023*  
**[49] Towards Vehicle-to-Everything Autonomous Driving: A Survey on Collaborative Perception**  
S. Liu, C. Gao, Y. Chen, X. Peng, X. Kong, K. Wang, R. Xu, W.Jiang, H.Xiang, J.Maetal.  
[[Paper](https://arxiv.org/abs/2308.16714)]

*IEEE TPAMI 2020*  
**[1] Deep Learning for 3D Point Clouds: A Survey**  
Y. Guo, H. Wang, Q. Hu, H. Liu, L. Liu, and M. Bennamoun  
[[Paper](https://doi.org/10.1109/tpami.2020.3005434)]

[↑ Back to categories](#categories)

---

<a id="category-02"></a>

## Single-Agent Foundations

*IEEE T-ITS 2023*  
**[9] AnchorPoint: Query Design for Transformer-Based 3D Object Detection and Tracking**  
H. Liu, Y. Ma, H. Wang, C. Zhang, and Y. Guo  
[[Paper](https://doi.org/10.1109/tits.2023.3282204)]

*IJCV 2023*  
**[11] PV-RCNN++: Point-Voxel Feature Set Abstraction with Local Vector Representation for 3D Object Detection**  
S.Shi, L.Jiang, J.Deng, Z.Wang, C.Guo, J.Shi, X.Wang, and H.Li  
[[Scholar](https://scholar.google.com/scholar?q=Pv-rcnn%2B%2B%3APoint-voxelfeaturesetabstractionwithlocal+vector+representation+for+3D+object+detection)] [[Code](https://github.com/open-mmlab/OpenPCDet)]

*CVPR 2023*  
**[16] FUTR3D: A Unified Sensor Fusion Framework for 3D Detection**  
X.Chen, T. Zhang, Y. Wang, Y.Wang, and H.Zhao  
[[Scholar](https://scholar.google.com/scholar?q=FUTR3D%3A+Aunifiedsensorfusionframeworkfor3Ddetection)] [[Code](https://github.com/Tsinghua-MARS-Lab/futr3d)]

*arXiv 2022*  
**[13] BEVFusion: Multi-Task Multi-Sensor Fusion with Unified Bird's-Eye View Representation**  
Z.Liu, H.Tang, A.Amini, X.Yang, H.Mao, D.Rus, andS.Han  
[[Paper](https://arxiv.org/abs/2205.13542)] [[Code](https://github.com/mit-han-lab/bevfusion)]

*CVPR 2022*  
**[14] TransFusion: Robust LiDAR-Camera Fusion for 3D Object Detection with Transformers**  
X.Bai, Z.Hu, X.Zhu, Q.Huang, Y.Chen, H.Fu, andC.-L.Tai  
[[Scholar](https://scholar.google.com/scholar?q=Transfusion%3ARobustlidar-camerafusionfor3Dobjectdetection+withtransformers)] [[Code](https://github.com/XuyangBai/TransFusion)]

*NeurIPS 2022*  
**[15] DeepInteraction: 3D Object Detection via Modality Interaction**  
Z.Yang, J.Chen, Z.Miao, W.Li, X.Zhu, andL.Zhang  
[[Scholar](https://scholar.google.com/scholar?q=Deepinteraction%3A3Dobjectdetectionviamodalityinteraction)] [[Code](https://github.com/fudan-zvg/DeepInteraction)]

*CVPR 2021*  
**[12] Center-Based 3D Object Detection and Tracking**  
T. Yin, X. Zhou, and P. Krahenbuhl  
[[Scholar](https://scholar.google.com/scholar?q=Center-based+3D+object+detectionandtracking)] [[Code](https://github.com/tianweiy/CenterPoint)]

*CVPR 2020*  
**[8] 3DSSD: Point-Based 3D Single Stage Object Detector**  
Z.Yang, Y.Sun, S.Liu, andJ.Jia  
[[Scholar](https://scholar.google.com/scholar?q=3DSSD%3APoint-based3Dsingle+stageobjectdetector)]

*CVPR 2020*  
**[10] PV-RCNN: Point-Voxel Feature Set Abstraction for 3D Object Detection**  
S.Shi, C.Guo, L.Jiang, Z.Wang, J.Shi, X.Wang, andH.Li  
[[Scholar](https://scholar.google.com/scholar?q=Pvrcnn%3APoint-voxelfeaturesetabstractionfor3Dobjectdetection)] [[Code](https://github.com/open-mmlab/OpenPCDet)]

*CVPR 2019*  
**[5] PointPillars: Fast Encoders for Object Detection from Point Clouds**  
A. H. Lang, S. Vora, H. Caesar, L. Zhou, J. Yang, and O. Beijbom  
[[Scholar](https://scholar.google.com/scholar?q=PointPillars%3AFastencodersforobjectdetectionfrompoint+clouds)] [[Code](https://github.com/nutonomy/second.pytorch)]

*CVPR 2019*  
**[7] PointRCNN: 3D Object Proposal Generation and Detection from Point Cloud**  
S. Shi, X. Wang, and H. Li  
[[Scholar](https://scholar.google.com/scholar?q=PointRCNN%3A+3D+object+proposal+generationanddetectionfrompointcloud)] [[Code](https://github.com/sshaoshuai/PointRCNN)]

*CVPR 2018*  
**[4] VoxelNet: End-to-End Learning for Point Cloud Based 3D Object Detection**  
Y.ZhouandO.Tuzel  
[[Scholar](https://scholar.google.com/scholar?q=VoxelNet%3AEnd-to-endlearningforpoint+cloudbased3Dobjectdetection)]

*Sensors 2018*  
**[6] SECOND: Sparsely Embedded Convolutional Detection**  
Y.Yan, Y.Mao, andB.Li  
[[Scholar](https://scholar.google.com/scholar?q=SECOND%3ASparselyembeddedconvolutionaldetection)] [[Code](https://github.com/traveller59/second.pytorch)]

*CVPR 2018*  
**[19] 3D Semantic Segmentation with Submanifold Sparse Convolutional Networks**  
B.Graham, M.Engelcke, andL.VanDerMaaten  
[[Scholar](https://scholar.google.com/scholar?q=3Dsemantic+segmentationwithsubmanifoldsparseconvolutionalnetworks)] [[Code](https://github.com/facebookresearch/SparseConvNet)]

*CVPR 2017*  
**[17] PointNet: Deep Learning on Point Sets for 3D Classification and Segmentation**  
C.R.Qi, H.Su, K.Mo, andL.J.Guibas  
[[Scholar](https://scholar.google.com/scholar?q=PointNet%3ADeeplearning+onpointsetsfor3Dclassificationandsegmentation)] [[Code](https://github.com/charlesq34/pointnet)]

*NeurIPS 2017*  
**[18] PointNet++: Deep Hierarchical Feature Learning on Point Sets in a Metric Space**  
C. R. Qi, L. Yi, H. Su, and L. J. Guibas  
[[Scholar](https://scholar.google.com/scholar?q=PointNet%2B%2B%3A+Deep+hierarchicalfeaturelearningonpointsetsinametricspace)] [[Code](https://github.com/charlesq34/pointnet2)]

[↑ Back to categories](#categories)

---

<a id="category-03"></a>

## Collaborative Foundations

*CVPR 2023*  
**[24] V2V4Real: A Real-World Large-Scale Dataset for Vehicle-to-Vehicle Cooperative Perception**  
R. Xu, X. Xia, J. Li, H. Li, S. Zhang, Z. Tu, Z. Meng, H. Xiang, X. Dong, R. Song et al.  
[[Scholar](https://scholar.google.com/scholar?q=V2v4real%3A+A+real-world+large-scale+datasetforvehicle-to-vehiclecooperativeperception)] [[Code](https://github.com/ucla-mobility/V2V4Real)]

*CVPR 2023*  
**[25] Collaboration Helps Camera Overtake LiDAR in 3D Detection**  
Y.Hu, Y.Lu, R.Xu, W.Xie, S.Chen, andY.Wang  
[[Scholar](https://scholar.google.com/scholar?q=Collaboration+helpscameraovertakelidarin3Ddetection)] [[Code](https://github.com/DerrickXuNu/CoBEVT)]

*ICRA 2022*  
**[21] OPV2V: An Open Benchmark Dataset and Fusion Pipeline for Perception with Vehicle-to-Vehicle Communication**  
R. Xu, H. Xiang, X. Xia, X. Han, J. Li, and J. Ma  
[[Scholar](https://scholar.google.com/scholar?q=Opv2v%3A+An+openbenchmarkdatasetandfusionpipelineforperceptionwith+vehicle-to-vehicle+communication)] [[Code](https://github.com/DerrickXuNu/OpenCOOD)]

*ECCV 2022*  
**[22] V2X-ViT: Vehicle-to-Everything Cooperative Perception with Vision Transformer**  
R.Xu, H.Xiang, Z.Tu, X.Xia, M.-H.Yang, andJ.Ma  
[[Paper](https://doi.org/10.1007/978-3-031-19842-7_7)] [[Code](https://github.com/DerrickXuNu/v2x-vit)]

*CVPR 2022*  
**[23] DAIR-V2X: A Large-Scale Dataset for Vehicle-Infrastructure Cooperative 3D Object Detection**  
H. Yu, Y. Luo, M. Shu, Y. Huo, Z. Yang, Y. Shi, Z. Guo, H. Li, X.Hu, J.Yuanetal.  
[[Scholar](https://scholar.google.com/scholar?q=Dair-v2x%3AAlarge-scaledatasetforvehicleinfrastructure+cooperative+3D+object+detection)] [[Code](https://github.com/AIR-THU/DAIR-V2X)]

*IEEE T-ITS 2020*  
**[20] Cooperative Perception for 3D Object Detection in Driving Scenarios Using Infrastructure Sensors**  
E.Arnold, M.Dianati, R.DeTemple, andS.Fallah  
[[Paper](https://arxiv.org/pdf/1912.12147)]

[↑ Back to categories](#categories)

---

<a id="category-04"></a>

## Early Collaboration

*arXiv 2026*  
**[52] CoLC: Communication-Efficient Collaborative Perception with LiDAR Completion**  
Y.Han, H.Zhang, Q.Xia, Y.Jin, andY.Li  
[[Paper](https://arxiv.org/abs/2603.00682)]

*ICRA 2025*  
**[51] Planning-Oriented Cooperative Perception Among Heterogeneous Vehicles**  
H. Zheng, F. Ye, and Y. Yang  
[[Scholar](https://scholar.google.com/scholar?q=Planning-oriented+cooperative+perceptionamongheterogeneousvehicles)]

*2024*  
**[50] KeyCoop: Communication-Efficient Raw-Level Cooperative Perception for Connected Autonomous Vehicles via Keypoints Extraction**  
Q. Xie, X. Zhou, C. Wang, T. Qiu, and W. Qu  
[[Scholar](https://scholar.google.com/scholar?q=Keycoop%3A+Communication-efficient+raw-level+cooperative+perception+for+connected+autonomous+vehicles+via+keypoints+extraction)]

*arXiv 2021*  
**[38] AutoCast: Scalable Infrastructure-Less Cooperative Perception for Distributed Collaborative Driving**  
H. Qiu, P. Huang, N. Asavisanu, X. Liu, K. Psounis, and R.Govindan  
[[Paper](https://arxiv.org/abs/2112.14947)]

*ICDCS 2019*  
**[37] Cooper: Cooperative Perception for Connected Autonomous Vehicles Based on 3D Point Clouds**  
Q. Chen, S. Tang, Q. Yang, and S. Fu  
[[Scholar](https://scholar.google.com/scholar?q=Cooper%3A+Cooperative+perceptionforconnectedautonomousvehiclesbasedon3Dpoint+clouds)]

[↑ Back to categories](#categories)

---

<a id="category-05"></a>

## Intermediate · Dense Features

*arXiv 2026*  
**[66] CATNet: Collaborative Alignment and Transformation Network for Cooperative Perception**  
G.Chen, C.Zhang, T.Tang, P.Lv, F.Li, andX.Xie  
[[Paper](https://arxiv.org/abs/2603.05255)]

*2025*  
**[61] Occlusion-Guided Multi-Modal Fusion for Vehicle-Infrastructure Cooperative 3D Object Detection**  
H. Chu, H. Liu, J. Zhuo, J. Chen, and H. Ma  
[[Scholar](https://scholar.google.com/scholar?q=Occlusionguidedmulti-modalfusionforvehicle-infrastructurecooperative+3Dobjectdetection)]

*IEEE RA-L 2025*  
**[64] CoST: Efficient Collaborative Perception from a Unified Spatiotemporal Perspective**  
Z.Tang, Y.Liu, Y.Sun, Y.Gao, J.Chen, R.Xu, andS.Liu  
[[Paper](https://arxiv.org/abs/2508.00359)]

*ICCV 2025*  
**[65] DATA: Domain-and-Time Alignment for High-Quality Feature Fusion in Collaborative Perception**  
C. Tian, J. Ma, Y. Huang, Z. Chen, H. Wei, H. Zhang, and W. Hong  
[[Scholar](https://scholar.google.com/scholar?q=Data%3A+Domain-and-time+alignment+for+high-quality+featurefusionincollaborativeperception)]

*IEEE TPAMI 2024*  
**[55] V2X-ViT v2: Improved Vision Transformers for Vehicle-to-Everything Cooperative Perception**  
R.Xu, C.-J.Chen, Z.Tu, andM.-H.Yang  
[[Scholar](https://scholar.google.com/scholar?q=V2x-vitv2%3AImproved+visiontransformersforvehicle-to-everythingcooperativeperception)] [[Code](https://github.com/DerrickXuNu/OpenCOOD)]

*IEEE T-IV 2024*  
**[60] CoRange: Collaborative Range-Aware Adaptive Fusion for Multi-Agent Perception**  
Q.Shu, J.Chen, Y.Lu, Y.Zhang, andY.Wang  
[[Scholar](https://scholar.google.com/scholar?q=Corange%3ACollaborativerange-awareadaptivefusionformulti-agentperception)]

*ICRA 2024*  
**[62] EMIFF: Enhanced Multi-Scale Image Feature Fusion for Vehicle-Infrastructure Cooperative 3D Object Detection**  
Z.Wang, S.Fan, X.Huo, T.Xu, Y.Wang, J.Liu, Y.Chen, andY.- Q.Zhang  
[[Scholar](https://scholar.google.com/scholar?q=Emiff%3AEnhancedmulti-scaleimagefeaturefusionfor+vehicle-infrastructurecooperative3Dobjectdetection)]

*arXiv 2024*  
**[63] V2X-M2C: Efficient Multi-Module Collaborative Perception with Two Connections**  
H. B. M. K. H. Ahn  
[[Paper](https://arxiv.org/abs/2407.11546)]

*ICCV 2023*  
**[56] TransIFF: An Instance-Level Feature Fusion Framework for Vehicle-Infrastructure Cooperative 3D Detection with Transformers**  
Z. Chen, Y. Shi, and J. Jia  
[[Scholar](https://scholar.google.com/scholar?q=Transiff%3A+An+instance-level+feature+fusion+framework+for+vehicle-infrastructure+cooperative+3D+detectionwithtransformers)]

*IEEE T-ITS 2023*  
**[59] V2VFormer++: Multi-Modal Vehicle-to-Vehicle Cooperative Perception via Global-Local Transformer**  
H.Yin, D.Tian, C.Lin, X.Duan, J.Zhou, D.Zhao, andD.Cao  
[[Scholar](https://scholar.google.com/scholar?q=V2vformer%2B%2B%3A+Multi-modal+vehicle-to-vehicle+cooperative+perceptionviaglobal-localtransformer)]

*CoRL 2022*  
**[57] Cooperative Bird's Eye View Semantic Segmentation with Sparse Transformers**  
R. Xu, Z. Tu, H. Xiang, W. Shao, B. Zhou, and J. C. Ma  
[[Scholar](https://scholar.google.com/scholar?q=Cooperative+bird%E2%80%99s+eye+view+semantic+segmentation+with+sparse+transformers)] [[Code](https://github.com/DerrickXuNu/CoBEVT)]

*ACM MM 2022*  
**[58] Complementarity-Enhanced and Redundancy-Minimized Collaboration Network for Multi-Agent Perception**  
G. Luo, H. Zhang, Q. Yuan, and J. Li  
[[Scholar](https://scholar.google.com/scholar?q=Complementarityenhancedandredundancy-minimizedcollaborationnetworkfor+multi-agentperception)]

*NeurIPS 2021*  
**[54] Learning Distilled Collaboration Graph for Multi-Agent Perception**  
Y. Li, S. Ren, P. Wu, S. Chen, C. Feng, and W. Zhang  
[[Scholar](https://scholar.google.com/scholar?q=Learning+distilled+collaboration+graph+for+multi-agent+perception)] [[Code](https://github.com/ai4ce/DiscoNet)]

*ECCV 2020*  
**[53] V2VNet: Vehicle-to-Vehicle Communication for Joint Perception and Prediction**  
T.-H. Wang, S. Manivasagam, M. Liang, B. Yang, W. Zeng, and R.Urtasun  
[[Scholar](https://scholar.google.com/scholar?q=V2vnet%3AVehicle-to-vehiclecommunicationforjoint+perceptionandprediction)] [[Code](https://github.com/coperception/coperception)]

*2019*  
**[39] F-Cooper: Feature-Based Cooperative Perception for Autonomous Vehicle Edge Computing Using 3D Point Clouds**  
Q.Chen, X.Ma, S.Tang, J.Guo, Q.Yang, andS.Fu  
[[Paper](https://arxiv.org/pdf/1909.06459)]

[↑ Back to categories](#categories)

---

<a id="category-06"></a>

## Intermediate · Sparse & Efficient

*arXiv 2026*  
**[76] WhisperNet: A Scalable Solution for Bandwidth-Efficient Collaboration**  
G. Chen, C. Zhang, and X. Zhao  
[[Paper](https://arxiv.org/abs/2603.01708)]

*arXiv 2025*  
**[67] Fast2comm: Collaborative Perception Combined with Prior Knowledge**  
Z. Zhang, Y. Wu, and H. Zhang  
[[Paper](https://arxiv.org/abs/2505.00740)]

*arXiv 2025*  
**[69] EffiComm: Bandwidth-Efficient Multi-Agent Communication**  
M. Yazgan, A. X. Arasan, and J. M. Zo¨llner  
[[Paper](https://arxiv.org/abs/2507.19354)]

*arXiv 2025*  
**[71] QuantV2X: A Fully Quantized Multi-Agent System for Cooperative Perception**  
S.Z.Zhao, H.Zhang, Z.Li, J.Peng, A.Chui, Z.Zhou, Z.Meng, H.Xiang, Z.Huang, F.Wangetal.  
[[Paper](https://arxiv.org/abs/2509.03704)]

*ICRA 2025*  
**[72] DiffCP: Ultra-Low-Bit Collaborative Perception via Diffusion Model**  
R. Mao, H. Wu, Y. Jia, Z. Nan, Y. Sun, S. Zhou, D. Gu¨ndu¨z, and Z. Niu  
[[Scholar](https://scholar.google.com/scholar?q=Diffcp%3A+Ultra-low+bit+collaborative+perception+via+diffusionmodel)]

*2025*  
**[74] SparseComm: An Efficient Sparse Communication Framework for Vehicle-Infrastructure Cooperative 3D Detection**  
H.Liu, H.Chu, J.Zhuo, B.Zou, J.Chen, andH.Ma  
[[Scholar](https://scholar.google.com/scholar?q=Sparsecomm%3AAnefficientsparsecommunicationframeworkforvehicleinfrastructurecooperative3Ddetection)]

*CVPR 2025*  
**[75] SparseAlign: A Fully Sparse Framework for Cooperative Object Detection**  
Y.Yuan, Y.Xia, D.Cremers, andM.Sester  
[[Scholar](https://scholar.google.com/scholar?q=Sparsealign%3AAfully+sparse+framework+for+cooperative+object+detection)]

*CVPR 2024*  
**[70] Communication-Efficient Collaborative Perception via Information Filling with Codebook**  
Y.Hu, J.Peng, S.Liu, J.Ge, S.Liu, andS.Chen  
[[Paper](https://arxiv.org/abs/2405.04966)] [[Code](https://github.com/PhyllisH/CodeFilling)]

*NeurIPS 2023*  
**[27] How2comm: Communication-Efficient and Collaboration-Pragmatic Multi-Agent Perception**  
D. Yang, K. Yang, Y. Wang, J. Liu, Z. Xu, R. Yin, P. Zhai, and L. Zhang  
[[Paper](https://openreview.net/forum?id=Dbaxm9ujq6)] [[Code](https://github.com/ydk122024/How2comm)]

*ICCV 2023*  
**[68] UMC: A Unified Bandwidth-Efficient and Multi-Resolution Based Collaborative Perception Framework**  
T. Wang, G. Chen, K. Chen, Z. Liu, B. Zhang, A. Knoll, and C. Jiang  
[[Paper](https://arxiv.org/abs/2303.12400)] [[Code](https://github.com/ispc-lab/UMC)]

*NeurIPS 2022*  
**[26] Where2comm: Communication-Efficient Collaborative Perception via Spatial Confidence Maps**  
Y. Hu, S. Fang, Z. Lei, Y. Zhong, and S. Chen  
[[Paper](https://arxiv.org/abs/2209.12836)] [[Code](https://github.com/MediaBrain-SJTU/where2comm)]

*IEEE RA-L 2022*  
**[73] Keypoints-Based Deep Feature Fusion for Cooperative Vehicle Detection of Autonomous Driving**  
Y.Yuan, H.Cheng, andM.Sester  
[[Scholar](https://scholar.google.com/scholar?q=Keypoints-baseddeepfeature+fusionforcooperativevehicledetectionofautonomousdriving)]

[↑ Back to categories](#categories)

---

<a id="category-07"></a>

## Intermediate · Object & Query

*arXiv 2025*  
**[78] CoopDETR: A Unified Cooperative Perception Framework for 3D Detection via Object Query**  
Z. Wang, S. Xu, X. Zhuang, T. Xu, Y. Wang, J. Liu, Y. Chen, and Y.-Q. Zhang  
[[Paper](https://arxiv.org/abs/2502.19313)]

*arXiv 2025*  
**[80] CoCMT: Communication-Efficient Cross-Modal Transformer for Collaborative Perception**  
R. Wang, X. Gao, H. Xiang, R. Xu, and Z. Tu  
[[Paper](https://arxiv.org/abs/2503.13504)]

*arXiv 2025*  
**[81] Which2comm: An Efficient Collaborative Perception Framework for 3D Object Detection**  
D.Yu, J.You, X.Pei, A.Qu, D.Wang, andS.Jia  
[[Paper](https://arxiv.org/abs/2503.17175)]

*ICCV 2025*  
**[82] INSTINCT: Instance-Level Interaction Architecture for Query-Based Collaborative Perception**  
Y.Xu, L.Li, J.Wang, Y.Ouyang, andB.Yang  
[[Scholar](https://scholar.google.com/scholar?q=Instinct%3AInstancelevel+interaction+architecture+for+query-based+collaborative+perception)]

*ICRA 2024*  
**[77] QUEST: Query Stream for Practical Cooperative Perception**  
S.Fan, H.Yu, W.Yang, J.Yuan, andZ.Nie  
[[Scholar](https://scholar.google.com/scholar?q=Quest%3AQuerystream+forpracticalcooperativeperception)]

*IEEE RA-L 2023*  
**[79] CenterCoop: Center-Based Feature Aggregation for Communication-Efficient Vehicle-Infrastructure Cooperative 3D Object Detection**  
L.Zhou, Z.Gan, andJ.Fan  
[[Scholar](https://scholar.google.com/scholar?q=Centercoop%3ACenter-basedfeature+aggregation+for+communication-efficient+vehicle-infrastructure+cooperative+3D+object+detection)]

[↑ Back to categories](#categories)

---

<a id="category-08"></a>

## Late Collaboration

*arXiv 2025*  
**[84] A Late Collaborative Perception Framework for 3D Multi-Object and Multi-Source Association and Fusion**  
M.Fadili, M.A.Ghaoui, L.Lecrosnier, S.Pechberti, andR.Khemmar  
[[Paper](https://arxiv.org/abs/2507.02430)]

*arXiv 2022*  
**[83] Model-Agnostic Multi-Agent Perception Framework**  
R. Xu, W. Chen, H. Xiang, L. Liu, and J. Ma  
[[Paper](https://arxiv.org/abs/2203.13168)]

[↑ Back to categories](#categories)

---

<a id="category-09"></a>

## Hybrid Collaboration

*arXiv 2025*  
**[85] Communication-Efficient Multi-Agent 3D Detection via Hybrid Collaboration**  
Y.Hu, J.Peng, Y.Yang, andS.Chen  
[[Paper](https://arxiv.org/abs/2508.07092)]

*ICCV 2025*  
**[86] mmCooper: A Multi-Agent Multi-Stage Communication-Efficient and Collaboration-Robust Cooperative Perception Framework**  
B. Liu, J. Teng, H. Xue, E. Wang, C. Zhu, P. Wang, and L. Wu  
[[Scholar](https://scholar.google.com/scholar?q=mmcooper%3AAmulti-agentmulti-stagecommunication-efficient+andcollaboration-robustcooperativeperceptionframework)]

*CVPR 2025*  
**[87] CoSDH: Communication-Efficient Collaborative Perception via Supply-Demand Awareness and Intermediate-Late Hybridization**  
J.Xu, Y.Zhang, Z.Cai, andD.Huang  
[[Scholar](https://scholar.google.com/scholar?q=Cosdh%3ACommunicationefficientcollaborativeperceptionviasupply-demandawareness+and+intermediate-late+hybridization)]

[↑ Back to categories](#categories)

---

<a id="category-10"></a>

## Spatiotemporal Alignment

*CVPR 2025*  
**[42] TraF-Align: Trajectory-Aware Feature Alignment for Asynchronous Multi-Agent Perception**  
Z.Song, L.Yang, F.Wen, andJ.Li  
[[Scholar](https://scholar.google.com/scholar?q=Traf-align%3ATrajectory-aware+featurealignmentforasynchronousmulti-agentperception)]

*arXiv 2025*  
**[93] Fresh2comm: Information-Freshness-Optimized Collaborative Perception**  
Z. Wu, Z. Peng, and L. Yu  
[[Paper](https://arxiv.org/abs/2502.07852)]

*IEEE T-ITS 2025*  
**[94] COSTFE: Spatio-Temporal Feature Enhancement for Collaborative Perception**  
M. Wang, X. He, Y. Li, and Y. Yue  
[[Scholar](https://scholar.google.com/scholar?q=Costfe%3A+Spatio-temporal+feature+enhancement+for+collaborative+perception)]

*ECCV 2024*  
**[90] Align Before Collaborate: Mitigating Feature Misalignment for Robust Multi-Agent Perception**  
K. Yang, D. Yang, K. Li, D. Xiao, Z. Shao, P. Sun, and L. Song  
[[Scholar](https://scholar.google.com/scholar?q=Align+before+collaborate%3A+Mitigating+feature+misalignment+for+robust+multi-agent+perception)]

*2024*  
**[92] FETR: Feature Transformer for Vehicle-Infrastructure Cooperative 3D Object Detection**  
W.Yan, H.Cao, J.Chen, andT.Wu  
[[Scholar](https://scholar.google.com/scholar?q=Fetr%3AFeaturetransformer+forvehicle-infrastructurecooperative3Dobjectdetection)]

*arXiv 2024*  
**[95] V2X-PC: Vehicle-to-Everything Collaborative Perception via Point Cluster**  
S. Liu, Z. Ding, J. Fu, H. Li, S. Chen, S. Zhang, and X. Zhou  
[[Paper](https://arxiv.org/abs/2403.16635)]

*CVPR 2024*  
**[96] Multi-Agent Collaborative Perception via Motion-Aware Robust Communication Network**  
S.Hong, Y.Liu, Z.Li, S.Li, andY.He  
[[Scholar](https://scholar.google.com/scholar?q=Multi-agentcollaborative+perceptionviamotion-awarerobustcommunicationnetwork)]

*arXiv 2023*  
**[28] Vehicle-Infrastructure Cooperative 3D Object Detection via Feature Flow Prediction**  
H.Yu, Y.Tang, E.Xie, J.Mao, J.Yuan, P.Luo, andZ.Nie  
[[Paper](https://arxiv.org/abs/2303.10552)] [[Code](https://github.com/AIR-THU/DAIR-V2X)]

*NeurIPS 2023*  
**[41] Asynchrony-Robust Collaborative Perception via Bird's Eye View Flow**  
S. Wei, Y. Wei, Y. Hu, Y. Lu, Y. Zhong, S. Chen, and Y. Zhang  
[[Paper](https://arxiv.org/abs/2309.16940)] [[Code](https://github.com/MediaBrain-SJTU/CoBEVFlow)]

*NeurIPS 2023*  
**[91] Asynchrony-Robust Collaborative Perception via Bird's Eye View Flow**  
S. Wei, Y. Wei, Y. Hu, Y. Lu, Y. Zhong, S. Chen, and Y. Zhang  
[[Paper](https://arxiv.org/abs/2309.16940)] [[Code](https://github.com/MediaBrain-SJTU/CoBEVFlow)]
> Duplicate of reference [41] in the source bibliography.

*ECCV 2022*  
**[40] Latency-Aware Collaborative Perception**  
Z. Lei, S. Ren, Y. Hu, W. Zhang, and S. Chen  
[[Scholar](https://scholar.google.com/scholar?q=Latency-aware+collaborativeperception)]

*arXiv 2022*  
**[89] Robust Collaborative 3D Object Detection in the Presence of Pose Errors**  
Y.Lu, Q.Li, B.Liu, M.Dianati, C.Feng, S.Chen, andY.Wang  
[[Paper](https://arxiv.org/abs/2211.07214)] [[Code](https://github.com/yifanlu0227/CoAlign)]

*CoRL 2021*  
**[88] Learning to Communicate and Correct Pose Errors**  
N.Vadivelu, M.Ren, J.Tu, J.Wang, andR.Urtasun  
[[Scholar](https://scholar.google.com/scholar?q=Learning+tocommunicateandcorrectposeerrors)]

[↑ Back to categories](#categories)

---

<a id="category-11"></a>

## Communication & Fusion

*IEEE RA-L 2025*  
**[46] V2XPnP: Vehicle-to-Everything Spatio-Temporal Fusion for Multi-Agent Perception and Prediction**  
Z. Zhou, H. Xiang, Z. Zheng, S. Z. Zhao, M. Lei, Y. Zhang, T.Cai, X.Liu, J.Liu, M.Bajjietal.  
[[Scholar](https://scholar.google.com/scholar?q=V2xpnp%3AVehicle-to-everything+spatio-temporal+fusion+for+multi-agent+perception+and+prediction)]

*2024*  
**[47] Task-Oriented Communication for Vehicle-to-Infrastructure Cooperative Perception**  
J. Shao, T. Li, and J. Zhang  
[[Scholar](https://scholar.google.com/scholar?q=Task-oriented+communication+for+vehicle-to-infrastructure+cooperative+perception)]

*arXiv 2024*  
**[99] CoMamba: Real-Time Cooperative Perception Unlocked with State Space Models**  
J.Li, X.Liu, B.Li, R.Xu, J.Li, H.Yu, andZ.Tu  
[[Paper](https://arxiv.org/abs/2409.10699)]

*IEEE RA-L 2024*  
**[100] CollaMamba: Efficient Collaborative Perception with Cross-Agent Spatial-Temporal State Space Model**  
Y. Li, Q. Yuan, G. Luo, X. Fu, X. Zhu, Y. Yang, R. Pan, and J. Li  
[[Paper](https://arxiv.org/abs/2409.07714)]

*ICRA 2020*  
**[97] Who2com: Collaborative Perception via Learnable Handshake Communication**  
Y.-C. Liu, J. Tian, C.-Y. Ma, N. Glaser, C.-W. Kuo, and Z. Kira  
[[Scholar](https://scholar.google.com/scholar?q=Who2com%3A+Collaborative+perception+via+learnable+handshake+communication)] [[Code](https://github.com/GT-RIPL/MultiAgentPerception)]

*CVPR 2020*  
**[98] When2com: Multi-Agent Perception via Communication Graph Grouping**  
Y.-C.Liu, J.Tian, N.Glaser, andZ.Kira  
[[Paper](https://arxiv.org/abs/2006.00176)] [[Code](https://github.com/GT-RIPL/MultiAgentPerception)]

[↑ Back to categories](#categories)

---

<a id="category-12"></a>

## Heterogeneous Collaboration

*arXiv 2026*  
**[103] Linking Modality Isolation in Heterogeneous Collaborative Perception**  
C. Liu, Z. Chao, and S. Chen  
[[Paper](https://arxiv.org/abs/2603.00609)] [[Code](https://github.com/cxliu0314/CodeAlign)]

*arXiv 2026*  
**[108] OpenCOOD-Air: Prompting Heterogeneous Ground-Air Collaborative Perception with Spatial Conversion and Offset Prediction**  
X.Wu, S.Bai, C.Li, Z.Luo, Y.Tian, F.Zhu, Y.Lv, andY.Tian  
[[Paper](https://arxiv.org/abs/2603.13919)]

*CVPR 2025*  
**[102] V2X-R: Cooperative LiDAR-4D Radar Fusion with Denoising Diffusion for 3D Object Detection**  
X. Huang, J. Wang, Q. Xia, S. Chen, B. Yang, X. Li, C. Wang, and C. Wen  
[[Scholar](https://scholar.google.com/scholar?q=V2x-r%3A+Cooperative+lidar-4D+radar+fusion+with+denoisingdiffusionfor3Dobjectdetection)]

*CVPR 2025*  
**[106] One Is Plenty: A Polymorphic Feature Interpreter for Immutable Heterogeneous Collaborative Perception**  
Y. Xia, Q. Yuan, G. Luo, X. Fu, Y. Li, X. Zhu, T. Luo, S. Chen, andJ.Li  
[[Scholar](https://scholar.google.com/scholar?q=Oneisplenty%3AApolymorphicfeatureinterpreterfor+immutable+heterogeneous+collaborative+perception)]

*IEEE T-ITS 2025*  
**[107] QCTF: A Quantized Communication and Transferable Fusion Framework for Multi-Agent Collaborative Perception**  
J.Chen, Q.Shu, Y.Lu, Y.Zhang, andY.Wang  
[[Scholar](https://scholar.google.com/scholar?q=Qctf%3AAquantized+communication+and+transferable+fusion+framework+for+multiagentcollaborativeperception)]

*ICLR 2024*  
**[30] An Extensible Framework for Open Heterogeneous Collaborative Perception**  
Y. Lu, Y. Hu, Y. Zhong, D. Wang, Y. Wang, and S. Chen  
[[Paper](https://arxiv.org/abs/2401.13964)] [[Code](https://github.com/yifanlu0227/HEAL)]

*AAAI 2024*  
**[101] DI-V2X: Learning Domain-Invariant Representation for Vehicle-Infrastructure Collaborative 3D Object Detection**  
X.Li, J.Yin, W.Li, C.Xu, R.Yang, andJ.Shen  
[[Paper](https://arxiv.org/abs/2312.15742)] [[Code](https://github.com/Serenos/DI-V2X)]

*ECCV 2024*  
**[104] HeteCooper: Feature Collaboration Graph for Heterogeneous Collaborative Perception**  
C. Shao, G. Luo, Q. Yuan, Y. Chen, Y. Liu, K. Gong, and J. Li  
[[Scholar](https://scholar.google.com/scholar?q=Hetecooper%3AFeaturecollaborationgraphforheterogeneouscollaborativeperception)]

*ECCV 2024*  
**[105] HEAD: A Bandwidth-Efficient Cooperative Perception Approach for Heterogeneous Connected and Autonomous Vehicles**  
D. Qu, Q. Chen, Y. Zhu, Y. Zhu, S. S. Avedisov, S. Fu, and Q. Yang  
[[Scholar](https://scholar.google.com/scholar?q=Head%3A+A+bandwidth-efficient+cooperative+perception+approach+for+heterogeneous+connected+and+autonomous+vehicles)]

*ICCV 2023*  
**[29] HM-ViT: Hetero-Modal Vehicle-to-Vehicle Cooperative Perception with Vision Transformer**  
H. Xiang, R. Xu, and J. Ma  
[[Paper](https://arxiv.org/abs/2304.10628)] [[Code](https://github.com/XHwind/HM-ViT)]

[↑ Back to categories](#categories)

---

<a id="category-13"></a>

## Trustworthy Collaboration

*arXiv 2026*  
**[32] Learning Mutual View Information Graph for Adaptive Adversarial Collaborative Perception**  
Y. Tao, S. Hu, H. An, Z. Fang, H. Cao, and Y. Fang  
[[Paper](https://arxiv.org/abs/2602.19596)]

*arXiv 2026*  
**[48] All Vehicles Can Lie: Efficient Adversarial Defense in Fully Untrusted-Vehicle Collaborative Perception via Pseudo-Random Bayesian Inference**  
Y.Yu, L.Wu, Z.Zhang, J.Qiu, L.Huo, andJ.Feng  
[[Paper](https://arxiv.org/abs/2603.08498)]

*IEEE T-ITS 2025*  
**[110] Efficient Collaborative Perception with Integrated Uncertainty Estimation via Evidence Regression**  
W. Li, L. Ma, H. Chang, X. He, and L. Huang  
[[Scholar](https://scholar.google.com/scholar?q=Efficient+collaborativeperceptionwithintegrateduncertaintyestimationvia+evidenceregression)]

*CVPR 2025*  
**[111] RCP-Bench: Benchmarking Robustness for Collaborative Perception Under Diverse Corruptions**  
S.Du, S.Qu, T.Wang, X.Zhang, Y.Zhu, J.Mao, F.Lu, Q.Lin, and G.Chen  
[[Scholar](https://scholar.google.com/scholar?q=Rcp-bench%3ABenchmarkingrobustnessforcollaborative+perception+under+diverse+corruptions)]

*arXiv 2025*  
**[112] CoopDiff: Anticipating 3D Human-Object Interactions via Contact-Consistent Decoupled Diffusion**  
X.Lin, T.Liang, J.-F.Hu, K.-Y.Lin, Y.Kang, C.Tian, J.Lai, and W.-S. Zheng  
[[Paper](https://arxiv.org/abs/2508.07162)]

*ICCV 2025*  
**[113] Pretend Benign: A Stealthy Adversarial Attack by Exploiting Vulnerabilities in Cooperative Perception**  
H. Lin, D. Pan, Q. Xia, H. Wu, C. Wang, S. Shen, and C. Wen  
[[Scholar](https://scholar.google.com/scholar?q=Pretend+benign%3A+A+stealthy+adversarial+attack+by+exploiting+vulnerabilitiesincooperativeperception)]

*CVPR 2024*  
**[31] ERMVP: Communication-Efficient and Collaboration-Robust Multi-Vehicle Perception in Challenging Environments**  
J.Zhang, K.Yang, Y.Wang, H.Wang, P.Sun, andL.Song  
[[Scholar](https://scholar.google.com/scholar?q=Ermvp%3A+Communication-efficient+and+collaboration-robust+multivehicleperceptioninchallengingenvironments)] [[Code](https://github.com/Terry9a/ERMVP)]

*arXiv 2022*  
**[109] Uncertainty Quantification of Collaborative Detection for Self-Driving**  
S. Su, Y. Li, S. He, S. Han, C. Feng, C. Ding, and F. Miao  
[[Paper](https://arxiv.org/abs/2209.08162)]

[↑ Back to categories](#categories)

---

<a id="category-14"></a>

## Cross-Platform Collaboration

*2025*  
**[43] UVCPNet: A UAV-Vehicle Collaborative Perception Network for 3D Object Detection**  
Y.Wang, Z.Wang, P.Cheng, P.Tian, Z.Yuan, J.Tian, W.Wang, and L. Zhao  
[[Scholar](https://scholar.google.com/scholar?q=Uvcpnet%3A+A+uav-vehicle+collaborative+perception+networkfor3Dobjectdetection)]

[↑ Back to categories](#categories)

---

<a id="category-15"></a>

## Platforms & Tooling

*CVPR 2022*  
**[119] Coopernaut: End-to-End Driving with Cooperative Perception for Networked Vehicles**  
J. Cui, H. Qiu, D. Chen, P. Stone, and Y. Zhu  
[[Scholar](https://scholar.google.com/scholar?q=Coopernaut%3A+End-to-end+driving+with+cooperative+perception+for+networked+vehicles)] [[Code](https://github.com/UT-Austin-RPL/Coopernaut)]

*2021*  
**[117] OpenCDA: An Open Cooperative Driving Automation Framework Integrated with Co-Simulation**  
R.Xu, Y.Guo, X.Han, X.Xia, H.Xiang, andJ.Ma  
[[Scholar](https://scholar.google.com/scholar?q=Opencda%3Aan+opencooperativedrivingautomationframeworkintegratedwith+co-simulation)] [[Code](https://github.com/ucla-mobility/OpenCDA)]

*2020*  
**[115] LGSVL Simulator: A High-Fidelity Simulator for Autonomous Driving**  
G.Rong, B.H.Shin, H.Tabatabaee, Q.Lu, S.Lemke, M.Mozˇeiko, E.Boise, G.Uhm, M.Gerow, S.Mehtaetal.  
[[Scholar](https://scholar.google.com/scholar?q=Lgsvlsimulator%3AA+high+fidelity+simulator+for+autonomous+driving)] [[Code](https://github.com/lgsvl/simulator)]

*2018*  
**[118] Microscopic Traffic Simulation Using SUMO**  
P. A. Lopez, M. Behrisch, L. Bieker-Walz, J. Erdmann, Y.-P. Flo¨ttero¨d, R. Hilbrich, L. Lu¨cken, J. Rummel, P. Wagner, and E.Wießner  
[[Scholar](https://scholar.google.com/scholar?q=Microscopictrafficsimulationusingsumo)] [[Code](https://github.com/eclipse-sumo/sumo)]

*CoRL 2017*  
**[114] CARLA: An Open Urban Driving Simulator**  
A. Dosovitskiy, G. Ros, F. Codevilla, A. Lopez, and V. Koltun  
[[Scholar](https://scholar.google.com/scholar?q=Carla%3A+An+open+urban+driving+simulator)] [[Code](https://github.com/carla-simulator/carla)]

*2017*  
**[116] AirSim: High-Fidelity Visual and Physical Simulation for Autonomous Vehicles**  
S.Shah, D.Dey, C.Lovett, andA.Kapoor  
[[Scholar](https://scholar.google.com/scholar?q=Airsim%3AHigh-fidelity+visualandphysicalsimulationforautonomousvehicles)] [[Code](https://github.com/microsoft/AirSim)]

*Publication*  
**[120] CoPerception: An SDK for Multi-Agent Collaborative Perception**  
CoPerception Community  
[[Paper](https://github.com/coperception/coperception)] [[Code](https://github.com/coperception/coperception)]

*Publication*  
**[121] ns-3: A Discrete-Event Network Simulator for Internet Systems**  
ns-3Project  
[[Paper](https://www.nsnam.org/)] [[Code](https://github.com/nsnam/ns-3-dev-git)]

[↑ Back to categories](#categories)

---

<a id="category-16"></a>

## Datasets & Benchmarks

*AAAI 2026*  
**[44] Griffin: Aerial-Ground Cooperative Detection and Tracking Dataset and Benchmark**  
J. Wang, X. Cao, J. Zhong, Y. Zhang, Z. Han, H. Yu, C. Zhang, L. He, S. Xu, and J. Wang  
[[Scholar](https://scholar.google.com/scholar?q=Griffin%3A+Aerial-ground+cooperative+detectionandtrackingdatasetandbenchmark)]

*arXiv 2026*  
**[45] V2U4Real: A Real-World Large-Scale Dataset for Vehicle-to-UAV Cooperative Perception**  
W.Li, H.Xiang, T.Wang, S.Wu, Q.Xia, C.Wang, andC.Wen  
[[Paper](https://arxiv.org/abs/2603.25275)]

*WACV 2026*  
**[122] V2XScene: Multi-View Consistent 3D Scene Simulation for Collaborative Perception**  
Y.Li, Y.Gong, andY.Zeng  
[[Scholar](https://scholar.google.com/scholar?q=V2xscene%3AMulti-viewconsistent3d+scenesimulationforcollaborativeperception)]

*arXiv 2026*  
**[123] SimBEV2X: A Large-Scale Dataset and Data Generation Tool for Multi-Task Vehicle-to-Everything Cooperative Perception**  
G. Mehr, S. Gohari, M. Abbas, and A. Eskandarian  
[[Paper](https://arxiv.org/abs/2607.23910)]

*CVPR 2026*  
**[138] CATS-V2V: A Real-World Vehicle-to-Vehicle Cooperative Perception Dataset with Complex Adverse Traffic Scenarios**  
H.Li, B.Cao, Z.Liang, W.Li, J.Oh, Y.Chen, S.Liang, H.Zhou, C. Ma, J. Liu et al.  
[[Scholar](https://scholar.google.com/scholar?q=Cats-v2v%3A+A+real-world+vehicle-to-vehicle+cooperativeperceptiondatasetwithcomplexadversetrafficscenarios)]

*arXiv 2025*  
**[124] V2X-ReaLO: An Open Online Framework and Dataset for Cooperative Perception in Reality**  
H.Xiang, Z.Zheng, X.Xia, S.Z.Zhao, L.Gao, Z.Zhou, T.Cai, Y. Zhang, and J. Ma  
[[Paper](https://arxiv.org/abs/2503.10034)]

*ICCV 2025*  
**[136] MixedSignals: A Diverse Point Cloud Dataset for Heterogeneous LiDAR V2X Collaboration**  
K. Z. Luo, M.-Q. Dao, Z. Liu, M. Campbell, W.-L. Chao, K. Q. Weinberger, E. Malis, V. Fremont, B. Hariharan, M. Shan et al.  
[[Scholar](https://scholar.google.com/scholar?q=Mixedsignals%3AAdiversepointclouddatasetforheterogeneous+lidarv2xcollaboration)]

*ICCV 2025*  
**[137] V2XScenes: A Multiple-Challenging-Traffic-Conditions Dataset for Large-Range Vehicle-Infrastructure Collaborative Perception**  
B.Wang, Y.Wang, W.Gong, S.Chen, G.Liu, M.Xiong, andC.L. Ng  
[[Scholar](https://scholar.google.com/scholar?q=V2xscenes%3AAmultiplechallengingtrafficconditionsdataset+for+large-range+vehicle-infrastructure+collaborative+perception)]

*ICLR 2024*  
**[127] An Extensible Framework for Open Heterogeneous Collaborative Perception**  
Y. Lu, Y. Hu, Y. Zhong, D. Wang, Y. Wang, and S. Chen  
[[Paper](https://arxiv.org/abs/2401.13964)] [[Code](https://github.com/yifanlu0227/HEAL)]
> Duplicate of reference [30] in the source bibliography.

*arXiv 2024*  
**[128] Multi-V2X: A Large-Scale Multi-Modal Multi-Penetration-Rate Dataset for Cooperative Perception**  
R. Li and X. Pei  
[[Paper](https://arxiv.org/abs/2409.04980)]

*AAAI 2024*  
**[129] DeepAccident: A Motion and Accident Prediction Benchmark for V2X Autonomous Driving**  
T. Wang, S. Kim, J. Wenxuan, E. Xie, C. Ge, J. Chen, Z. Li, and P. Luo  
[[Scholar](https://scholar.google.com/scholar?q=Deepaccident%3A+A+motion+and+accident+prediction+benchmarkforv2xautonomousdriving)]

*arXiv 2024*  
**[130] Adver-City: Open-Source Multi-Modal Dataset for Collaborative Perception Under Adverse Weather Conditions**  
M.KarvatandS.Givigi  
[[Paper](https://arxiv.org/abs/2410.06380)]

*arXiv 2024*  
**[131] WHALES: A Multi-Agent Scheduling Dataset for Enhanced Cooperation in Autonomous Driving**  
Y.Wang, S.Chen, Z.Song, andS.Zhou  
[[Paper](https://arxiv.org/abs/2411.13340)]

*CVPR 2024*  
**[133] TUMTraf V2X Cooperative Perception Dataset**  
W.Zimmer, G.A.Wardana, S.Sritharan, X.Zhou, R.Song, and A. C. Knoll  
[[Paper](https://arxiv.org/abs/2403.01316)] [[Code](https://github.com/tum-traffic-dataset/tum-traffic-dataset-dev-kit)]

*CVPR 2024*  
**[134] RCooper: A Real-World Large-Scale Dataset for Roadside Cooperative Perception**  
R.Hao, S.Fan, Y.Dai, Z.Zhang, C.Li, Y.Wang, H.Yu, W.Yang, J. Yuan, and Z. Nie  
[[Paper](https://arxiv.org/abs/2403.10145)] [[Code](https://github.com/AIR-THU/DAIR-RCooper)]

*ECCV 2024*  
**[135] V2X-Real: A Large-Scale Dataset for Vehicle-to-Everything Cooperative Perception**  
H.Xiang, Z.Zheng, X.Xia, R.Xu, L.Gao, Z.Zhou, X.Han, X.Ji, M.Li, Z.Mengetal.  
[[Paper](https://arxiv.org/abs/2403.16034)] [[Code](https://github.com/ucla-mobility/V2X-Real)]

*CVPR 2024*  
**[139] HoloVIC: Large-Scale Dataset and Benchmark for Multi-Sensor Holographic Intersection and Vehicle-Infrastructure Cooperation**  
C.Ma, L.Qiao, C.Zhu, K.Liu, Z.Kong, Q.Li, X.Zhou, Y.Kan, and W. Wu  
[[Scholar](https://scholar.google.com/scholar?q=Holovic%3A+Large-scale+dataset+and+benchmark+for+multi-sensorholographicintersectionandvehicle-infrastructure+cooperative)]

*CVPR 2023*  
**[132] V2X-Seq: A Large-Scale Sequential Dataset for Vehicle-Infrastructure Cooperative Perception and Forecasting**  
H.Yu, W.Yang, H.Ruan, Z.Yang, Y.Tang, X.Gao, X.Hao, Y.Shi, Y.Pan, N.Sunetal.  
[[Scholar](https://scholar.google.com/scholar?q=V2x-seq%3AAlarge-scalesequentialdatasetfor+vehicle-infrastructurecooperativeperceptionandforecasting)] [[Code](https://github.com/AIR-THU/DAIR-V2X-Seq)]

*IEEE RA-L 2022*  
**[125] V2X-Sim: Multi-Agent Collaborative Perception Dataset and Benchmark for Autonomous Driving**  
Y. Li, D. Ma, Z. An, Z. Wang, Y. Zhong, S. Chen, and C.Feng  
[[Scholar](https://scholar.google.com/scholar?q=V2x-sim%3AMulti-agentcollaborativeperceptiondataset+and+benchmark+for+autonomous+driving)] [[Code](https://github.com/ai4ce/V2X-Sim)]

*2022*  
**[126] DOLPHINS: Dataset for Collaborative Perception Enabled Harmonious and Interconnected Self-Driving**  
R. Mao, J. Guo, Y. Jia, Y. Sun, S. Zhou, and Z. Niu  
[[Paper](https://arxiv.org/abs/2207.07609)] [[Code](https://github.com/explosion5/Dolphins)]

[↑ Back to categories](#categories)

---

## Data and website

- Structured data: [papers.json](dist/assets/papers.json)
- Website entry point: [dist/index.html](dist/index.html)
- Regenerate this README with `python scripts/generate_readme.py`

Paper links point to arXiv, OpenReview, or the publisher whenever possible. Entries labeled Scholar use a search link. Code links are shown only for verified repositories.
