# ONGOING PURSUITS


Trained a DenseNet-121 CNN (PyTorch, transfer learning from ImageNet) to
 detect pleural effusion in 180K+ chest radiographs from Stanford’s CheXpert dataset, 
 achieving 0.876 validation AUROC with patient-level data splitting to prevent leakage across 65K patients. 
 Evaluated model behavior beyond headline metrics using Grad-CAM attention analysis, subgroup performance breakdowns by view position and demographics, and bootstrapped confidence intervals, and documented how the dataset’s uncertain-label policy constrains achievable performance.
 Next steps are to run Grad-CAM on high-confidence true and false positives, to check whether attention lands on costophrenic angles or on bedside hardware, run the subgroup breakdown on test (AP/PA, sex, age) and report any disparity, and check calibration and note whether the model is overconfident


Developing an application for Academic Advising on campus alongside four other students in an interdiscplinary course. 

