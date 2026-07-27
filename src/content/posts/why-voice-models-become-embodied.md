---
title: "Why Voice Models Become Embodied"
date: 2026-07-27T12:00:00Z
tags: ["voice", "embodiment", "AI", "speech"]
---

*How high-fidelity speech synthesis converges on an embodied simulation*

A powerful waveform model does not need a literal anatomical simulator with variables named `lung_volume`, `tongue_position`, or `thyroarytenoid_activation`. It can learn shortcuts, and for ordinary speech those shortcuts may work remarkably well.

They become less reliable as the demands increase. A model may be asked to remain coherent across long utterances; respond to unusual instructions or physical perturbations; preserve one speaker's physiology from scene to scene; produce combinations absent from its training data; distinguish similar sounds with different causes; interact in real time instead of reciting; or expose independent control over the causes of a sound.

Beyond some threshold, the hidden state has to represent variables that are functionally equivalent to respiratory, laryngeal, articulatory, sensorimotor, autonomic, cognitive, and social bodily states. The model begins to operate as an embodied simulation in the causal sense, whether or not its developers describe it that way.

Three stages help clarify the argument:

- **Acoustic imitation:** reproduce a waveform that resembles observed speech.
- **Embodied generativity:** maintain a hidden organism-like state whose changes cause the waveform.
- **Embodied agency:** perceive, predict, regulate, and adapt that state through interaction.

The progression is less like adding an "emotion" setting to speech and more like following the causal chain backward:

$$
\text{waveform}
\leftarrow \text{vocal apparatus}
\leftarrow \text{whole-body physiology}
\leftarrow \text{sensorimotor control}
\leftarrow \text{cognitive, affective, and social state}
$$

## Where the shortcuts start to fail

| Threshold | What begins failing without embodied state |
|---|---|
| 1. Intelligibility | Phonemes, formants, and consonant timing |
| 2. Local naturalness | Coarticulation, voice quality, and microprosody |
| 3. Utterance coherence | Breath groups, fatigue, and phrase-scale pitch and intensity |
| 4. Expressive realism | Smiling, tension, laughter, hesitation, and mixed emotion |
| 5. Speaker persistence | Stable anatomy, habits, health, age, and vocal limits |
| 6. Interactive realism | Listening while preparing, turn-taking, entrainment, and accommodation |
| 7. Counterfactual control | "Say it while smiling nervously, whispering, walking uphill, and trying not to laugh" |
| 8. Causal robustness | Novel combinations, pathology, perturbation, recovery, and adaptation |

These thresholds are not a single ladder every system must climb in order. They mark places where a surface model is increasingly pressured to reconstruct the system that generated the surface.

## I. Respiration: the power supply

| # | What is heard | Speech or clinical term | What the model increasingly needs |
|---|---|---|---|
| 1 | Where inhalations occur | Speech breathing; breath-group planning | Lung volume, intended utterance length, syntactic plan, and available expiratory reserve |
| 2 | Phrase length | Utterance per breath; maximum phonation time | Vital-capacity-like limits, airflow consumption, and upcoming linguistic material |
| 3 | Loudness across a phrase | Subglottal pressure; SPL contour | Respiratory muscle recruitment and pressure decay |
| 4 | Pitch drifting as air runs down | Lung-volume effect on F0 | Coupling among recoil pressure, laryngeal posture, and vocal-fold tension |
| 5 | Audible inhalation | Inspiratory noise; oral or nasal inspiration | Glottal opening, nasal versus oral route, flow rate, and urgency |
| 6 | Breathlessness | Dyspnea-like phonation; reduced breath support | Elevated respiratory drive, shortened phrases, rapid recovery breaths, and altered effort |
| 7 | Speech during exertion | Respiratory-phonatory competition | Locomotor demand, metabolic load, and the allocation of expiration between speech and gas exchange |
| 8 | Phrase-final weakening | Declination; terminal intensity fall; breathy offset | Falling pressure, laryngeal compensation, and the choice to trail off or replenish |
| 9 | Forceful projection | Vocal effort; respiratory drive | Abdominal and thoracic recruitment, subglottal pressure, and glottal resistance |
| 10 | Whisper duration and instability | Whisper airflow; turbulent excitation | High airflow consumption without periodic vocal-fold vibration |
| 11 | Sighs and voiced sighs | Paralinguistic expiration | Deep inspiration, passive recoil, and gradual laryngeal engagement |
| 12 | Coughs, throat-clears, and suppressed coughs | Protective laryngeal behaviours | Compression, glottal closure, explosive release, and competing social inhibition |
| 13 | Laugh-breath cycles | Egressive laughter pulses | Rapid intercostal contractions, expiratory bursts, phonated or unphonated pulses, and replenishing inhalations |
| 14 | Crying speech | Respiratory interruption; sobbing | Irregular inhalatory spasms, glottal constriction, and disrupted phrase planning |
| 15 | Breath timing in dialogue | Pre-turn inspiration; conversational breathing | Prediction of a turn opportunity, response preparation, and willingness to claim the floor |

Speech breathing changes with utterance length and loudness. Conversational inhalation is tied to response planning and turn management. Laughter has its own respiratory organization; it is not an indefinitely repeatable string of *ha* tokens. [Selected research on speech breathing](https://pmc.ncbi.nlm.nih.gov/articles/PMC2636560/)

## II. The larynx: the voice source

| # | What is heard | Relevant term | Required hidden variables |
|---|---|---|---|
| 16 | Fundamental frequency | F0; vocal-fold oscillation rate | Vocal-fold length, mass, longitudinal stiffness, and CT/TA muscle balance |
| 17 | Intensity | SPL; phonatory power | Subglottal pressure, glottal resistance, and closure behaviour |
| 18 | Breathy voice | Incomplete glottal closure; high H1-H2; spectral tilt | Resting glottal gap, adduction, tissue geometry, and airflow leakage |
| 19 | Pressed voice | Hyperadduction; low H1-H2; high contact quotient | Medial compression, intrinsic laryngeal activation, and pressure |
| 20 | Creak or vocal fry | Irregular phonation; pulse register; high jitter | Low F0, slack or short vocal folds, irregular closure timing, and low airflow |
| 21 | Falsetto or head-register quality | Register transition; thin-fold vibration | Reduced vibrating mass, altered TA/CT balance, and incomplete closure |
| 22 | Chest-register quality | Thicker medial surface; stronger harmonic excitation | Greater effective fold thickness and closure duration |
| 23 | Register breaks | Bifurcation; mode transition | Nonlinear tissue dynamics and instability across pressure-tension combinations |
| 24 | Smooth onset | Coordinated onset | Temporal alignment between airflow and vocal-fold adduction |
| 25 | Aspirate onset | Positive voice-onset interval | Airflow preceding complete laryngeal engagement |
| 26 | Hard or glottal onset | Glottal attack | Strong prephonatory adduction followed by abrupt pressure-driven oscillation |
| 27 | Whisper-to-voice transition | Phonation threshold pressure | Pressure, fold approximation, stiffness, and nonlinear onset conditions |
| 28 | Jitter | Cycle-to-cycle F0 perturbation | Oscillatory instability, motor noise, and tissue asymmetry |
| 29 | Shimmer | Cycle-to-cycle amplitude perturbation | Pressure variation, closure variation, and source instability |
| 30 | Harmonics-to-noise ratio | HNR; cepstral peak prominence | Periodicity, turbulent leakage, and regularity of tissue vibration |
| 31 | Diplophonia or subharmonics | Period doubling; nonlinear phonation | Asymmetric or multimodal fold oscillation |
| 32 | Vocal tremor | Rhythmic F0 or amplitude modulation | Oscillatory motor commands across respiratory and laryngeal subsystems |
| 33 | Strain | Muscle-tension-dysphonia-like quality | Excess intrinsic and extrinsic laryngeal tension, elevated laryngeal posture, and restricted vibration |
| 34 | A momentary voice crack under emotion | Phonatory instability | Rapid autonomic and motor changes that push the system through a nonlinear boundary |
| 35 | Voicing distinctions | Laryngeal timing; VOT; aspiration | Precise coordination of oral release, glottal opening, and onset of oscillation |
| 36 | Tonal-language pitch | Lexical tone production | Deliberate, syllable-aligned laryngeal tension trajectories rather than generic sentence melody |

Fold stiffness, thickness, glottal opening, and subglottal pressure all affect the resulting acoustics. They also interact nonlinearly. A generator with independent controls for pitch, breathiness, and loudness will eventually produce impossible combinations unless those controls share an underlying biomechanics. [Selected research on vocal-fold modelling](https://pmc.ncbi.nlm.nih.gov/articles/PMC4818279/)

## III. Source-filter coupling: where modular controls break

| # | What is heard | Term | What must be simulated |
|---|---|---|---|
| 37 | Vowel-dependent changes in voice quality | Source-filter interaction | Acoustic feedback from the vocal tract into glottal flow and fold vibration |
| 38 | Pitch instability near a formant | Nonlinear source-tract coupling | F0-resonance proximity, epilaryngeal geometry, and acoustic loading |
| 39 | Loudness efficiency | Inertive reactance; impedance matching | A vocal-tract configuration that assists or opposes glottal oscillation |
| 40 | Register behaviour changing with vowels | Filter-dependent phonation | Joint simulation of larynx and tract instead of independent pitch and timbre sliders |
| 41 | Singing resonance strategies | Formant tuning | Deliberate tract reshaping around source harmonics |
| 42 | Roughness caused by tract configuration | Source destabilization | Pressure feedback from supraglottal and subglottal cavities |

The classical linear source-filter decomposition remains useful, but living anatomy is less tidy. Aerodynamic and acoustic coupling allow tongue position, laryngeal height, epilaryngeal geometry, and tract resonances to change the source itself. [Selected research on nonlinear source-filter interaction](https://pmc.ncbi.nlm.nih.gov/articles/PMC10589054/)

## IV. Supralaryngeal articulation: the moving acoustic cavity

| # | What is heard | Phonetic term | Required simulation |
|---|---|---|---|
| 43 | Vowel identity | F1, F2, F3; vowel space | Tongue-body shape, jaw aperture, lip posture, and pharyngeal geometry |
| 44 | Speaker-consistent vowels | Vocal-tract-length normalization | Stable anatomy plus habitual articulatory targets |
| 45 | Lip rounding | Labialization; lowered formants | Lip protrusion, aperture, and effective tract length |
| 46 | Smiling speech | Lip spreading; apparent tract shortening | Lip-corner displacement, cheek tension, and altered cavity geometry |
| 47 | Bilabials | Oral closure; burst release | Upper and lower lip contact, intraoral pressure, and release timing |
| 48 | Alveolars | Tongue-tip constriction | Tongue-tip or blade placement and release |
| 49 | Velars | Dorsal constriction; velar pinch | Tongue dorsum, palate geometry, and vowel-dependent contact location |
| 50 | Sibilants | Spectral centre of gravity; spectral moments | Jet formation, a grooved tongue, obstacle position, and dental geometry |
| 51 | Stops | Closure, burst, aspiration, VOT | Sealing, pressure accumulation, release, and laryngeal coordination |
| 52 | Fricatives | Turbulent source; constriction degree | Airflow through a narrow constriction and the geometry of a downstream obstacle |
| 53 | Affricates | Stop-fricative coordination | Controlled transition from complete closure to sustained constriction |
| 54 | Rhotic variation | Alveolar tap, trill, approximant, or uvular R | Distinct tongue or uvular gestures, airflow, and, for trills, self-sustained tissue vibration |
| 55 | Laterals | Lateral channels; antiformants | Central tongue contact with side-channel airflow |
| 56 | Nasals | Velopharyngeal opening; nasal formants and antiformants | Velum position, nasal-cavity geometry, and oral side branches |
| 57 | Nasalized vowels | Coupled oral-nasal resonance | Continuously graded velopharyngeal port opening |
| 58 | Hypernasality | Velopharyngeal insufficiency | Persistent or mistimed oral-nasal coupling |
| 59 | Nasal emission | Turbulent nasal airflow | Pressure, port area, oral obstruction, and nasal resistance |
| 60 | Clicks and ejectives | Non-pulmonic airstream mechanisms | Multiple closures, cavity-pressure changes, and glottalic or lingual airflow generation |
| 61 | Fine consonant transitions | Formant transitions | Continuous articulator trajectories rather than phoneme-wise concatenation |
| 62 | Reduced casual speech | Lenition; undershoot; assimilation | Effort-sensitive trajectories and incomplete attainment of ideal targets |
| 63 | Clear speech | Hyperarticulation; expanded vowel space | Increased movement amplitude and duration, guided by listener-oriented motor goals |
| 64 | Mumbling | Hypoarticulation | Reduced jaw excursion, compressed vowel space, and lower articulatory effort |

Measured vocal-tract geometry can be converted into area functions that predict resonance. Even small changes in tract length affect perceived body size and speaker category; smiling changes acoustics partly because spreading the lips shortens the tract. [Selected research on vocal-tract geometry](https://pmc.ncbi.nlm.nih.gov/articles/PMC5966313/)

## V. Coordination and coarticulation: speech is not a row of sounds

| # | What is heard | Term | What must be simulated |
|---|---|---|---|
| 65 | A consonant changing with its vowel context | Anticipatory or carry-over coarticulation | Overlapping articulatory gestures and context-sensitive targets |
| 66 | Natural syllable transitions | Gestural phasing | Relative timing of tongue, jaw, lips, velum, and larynx |
| 67 | Assimilation across word boundaries | Connected-speech processes | Planning beyond the current phoneme or word |
| 68 | Segment-duration changes | Compensatory timing | Redistribution of movement time under rate, emphasis, and complexity constraints |
| 69 | Consonant-induced pitch perturbations | Microprosody | Mechanical and neural coupling between laryngeal gestures and segment type |
| 70 | Stress changing articulation | Prosodic strengthening | Larger, longer, or more precise gestures in prominent positions |
| 71 | Phrase-edge articulation | Domain-initial strengthening; final lengthening | Hierarchical prosodic planning acting on motor trajectories |
| 72 | Speech-rate effects | Spatial and temporal reduction | Biomechanical velocity and acceleration limits, plus target undershoot |
| 73 | The tongue compensating for a blocked jaw | Motor equivalence | Task-level acoustic goals and redundant articulatory solutions |
| 74 | Stable speech despite perturbation | Sensorimotor compensation | Online detection of bodily error and redistribution across articulators |
| 75 | Speaker-specific rhythm | Idiolectal motor timing | Persistent learned coordination patterns rather than a global tempo control |
| 76 | Realistic speech errors | Phonological versus motor errors | Multiple planning levels whose failures produce different kinds of output |

Articulatory synthesis improves when consonants are generated as context-dependent vocal-tract configurations. Human speakers also preserve acoustic goals by compensating with unperturbed articulators when, for example, the jaw is unexpectedly blocked. [Selected research on articulatory compensation](https://pubmed.ncbi.nlm.nih.gov/23613734/)

## VI. Sensorimotor and neurological control

| # | What is heard | Neurological term | Hidden process required |
|---|---|---|---|
| 77 | Fluent learned sequences | Feedforward motor commands | Stored mappings from phonological targets to coordinated gestures |
| 78 | Pitch correction after altered self-hearing | Auditory feedback control; pitch-shift reflex | Predicted auditory target, heard output, and error correction |
| 79 | Correction of jaw or tongue position | Somatosensory feedback control | Proprioceptive and tactile estimates of articulator state |
| 80 | Rapid self-correction | Efference copy; state estimation | Prediction of the sensory result before delayed feedback arrives |
| 81 | Stable output in noise | Lombard effect | Perceived noise, intelligibility estimates, and compensatory intensity or articulation |
| 82 | Speech adapted to room acoustics | Sidetone; external auditory feedback | Hearing reflected voice and adjusting effort |
| 83 | Sequencing syllables | Speech motor programming; GODIVA-like planning | Competitive selection and buffering of forthcoming motor chunks |
| 84 | Timing precision | Cerebellar prediction | Millisecond-scale coordination and error-based adaptation |
| 85 | Initiation and scaling | Basal-ganglia motor regulation | Movement onset, amplitude, automaticity, and vigour |
| 86 | Speech under divided attention | Dual-task interference | Shared executive and motor resources |
| 87 | Hesitation during lexical search | Incremental formulation | A partial linguistic plan interacting with a ready but delayed motor plan |
| 88 | Apraxic inconsistency | Apraxia of speech | Impaired planning or programming despite available muscles |
| 89 | Dysarthric weakness or incoordination | Dysarthria | Impairment distributed across respiration, phonation, resonance, articulation, and prosody |
| 90 | Stuttering-like disruption | Initiation or sequence instability | Competition, timing, and feedback dynamics rather than inserted textual repetitions |
| 91 | Motor adaptation over a conversation | Sensorimotor learning | Persistent updates to predicted body-sound mappings |
| 92 | Reflexive versus voluntary vocalizations | Dual laryngeal control systems | Distinct control pathways for speech, laughter, crying, and airway protection |

Speech production is a distributed control problem. Neural models such as DIVA distinguish feedforward commands, auditory targets, and somatosensory targets. Perturbation studies show speakers compensating through bodily feedback, while altered auditory feedback changes voice production. [Selected research on speech motor control](https://pmc.ncbi.nlm.nih.gov/articles/PMC3650855/)

## VII. Whole-body geometry and condition

| # | What is heard | Relevant term | What must be simulated |
|---|---|---|---|
| 93 | Apparent body size | Vocal-tract length; formant scaling | Stable head, pharynx, and tract geometry |
| 94 | Apparent age | Developmental vocal-tract morphology | Growth-dependent tract proportions and vocal-fold development |
| 95 | Sex-linked morphology cues | F0-VTL interaction | Fold dimensions and tract geometry, not pitch alone |
| 96 | Posture-dependent resonance | Postural phonation; tract deformation | Head, neck, jaw, spine, and laryngeal position |
| 97 | Voice while lying down | Supine versus upright tract acoustics | Gravity-sensitive soft tissue and airway geometry |
| 98 | Head turning during speech | Orientation-dependent radiation | Mouth direction, neck configuration, and changing microphone or listener geometry |
| 99 | Speech while smiling | Orofacial expression | Coordinated lips, cheeks, jaw, and sometimes laryngeal or respiratory changes |
| 100 | Speech while gesturing | Co-speech motor coupling | Shared timing and effort across hand, torso, jaw, and tongue movements |
| 101 | Walking or dancing speech | Locomotor-respiratory entrainment | Movement rhythm, impacts, exertion, and respiratory competition |
| 102 | Eating or dry-mouth speech | Oral lubrication; altered articulation | Saliva, mucosal contact, swallowing interruptions, and oral obstruction |
| 103 | Morning voice | Tissue state; mucus; edema-like change | Time-varying fold mass, hydration, and secretion state |
| 104 | Vocal fatigue | Laryngeal muscle or tissue fatigue | Accumulated loading, reduced control, altered effort, and recovery |
| 105 | Illness or congestion | Upper-airway obstruction; dysphonia | Nasal resistance, secretions, inflammation, and altered resonance |
| 106 | Pain-modified speech | Protective guarding | Restricted movement, breath-holding, and effort avoidance |
| 107 | Medication or intoxication effects | Sensorimotor alteration | Arousal, timing, muscle tone, coordination, and salivation changes |
| 108 | Stable bodily limits | Speaker-specific range profile | Physiological boundaries on F0, SPL, duration, and voice quality |

Posture changes vocal-tract acoustics; body morphology affects tract length and formants; vocal effort changes with room acoustics and accumulated fatigue. Co-speech gesture can even alter tongue and jaw displacement, which means "voice only" is not always motorically separable from the visible body. [Selected research on whole-body effects in speech](https://pmc.ncbi.nlm.nih.gov/articles/PMC4545056/)

## VIII. Autonomic, affective, and interoceptive state

| # | What is heard | Term | Required state |
|---|---|---|---|
| 109 | Stress-related pitch change | Autonomic arousal; F0 elevation or variability | Sympathetic activation interacting with laryngeal tension and respiratory drive |
| 110 | A tight, effortful voice | Perilaryngeal tension; hyperfunction | Extrinsic and intrinsic muscle recruitment |
| 111 | Quivering fear | Tremulous phonation | Unstable motor drive, respiratory irregularity, and heightened arousal |
| 112 | Anger | High-arousal prosody | Increased pressure, intensity, rate, articulation, and laryngeal activation |
| 113 | Sadness | Low activation; reduced prosodic range | Lower movement vigour, intensity, and pitch range, with slower timing |
| 114 | Excitement | Positive high arousal | Elevated respiratory drive and pitch variation without anger's constrictive configuration |
| 115 | Calm warmth | Low arousal; positive valence | Low tension with controlled breath, smooth onset, and flexible resonance |
| 116 | Nervous smiling | Affect-expression conflict | Simultaneous lip spreading, laryngeal tension, uncertain timing, and inhibited laughter |
| 117 | Trying not to laugh | Suppression; leakage | Competing voluntary inhibition and involuntary respiratory or laryngeal laughter patterns |
| 118 | Trying not to cry | Affective suppression | Glottal constriction, disrupted breathing, swallowing, and pitch instability |
| 119 | Confidence versus uncertainty | Epistemic prosody | Commitment state affecting tempo, terminal contours, intensity, and hesitation |
| 120 | Cognitive load | Voice stress; planning load | Executive demand, autonomic response, and disrupted motor precision |
| 121 | Emotional mixtures | Blended affective prosody | Multiple partly independent systems rather than a single emotion label |
| 122 | Emotion changing during a sentence | Dynamic affect trajectory | Continuous latent state evolving faster or slower than linguistic structure |
| 123 | Genuine versus posed laughter | Spontaneous or volitional laughter acoustics | Different respiratory, laryngeal, and social-control pathways |
| 124 | Contagious laughter and vocal entrainment | Social-affective coupling | Perception of another person changing the speaker's autonomic and motor state |

Stress is associated with changes in laryngeal muscle activity and acoustic output, yet no single acoustic cue uniquely identifies an emotion. Faithful synthesis therefore needs a multidimensional physiological state rather than a lookup table that translates `emotion=angry` into "raise pitch and volume." [Selected research on laryngeal response to stress](https://pmc.ncbi.nlm.nih.gov/articles/PMC7890219/)

## IX. Prosody, phonology, and linguistic embodiment

| # | What is heard | Term | Embodied dependency |
|---|---|---|---|
| 125 | Lexical tone | Tone contour; tone sandhi | Laryngeal trajectories synchronized with syllable structure |
| 126 | Question versus statement | Boundary tone | Phrase-level motor plan and pragmatic intention |
| 127 | Which word is emphasized | Nuclear accent; prominence | Joint F0, duration, intensity, and articulatory strengthening |
| 128 | Contrastive focus | Focus prosody | A listener model and selection among alternative meanings |
| 129 | Stress-timed or syllable-timed rhythm | Rhythmic organization | Language-specific timing attractors imposed on articulatory gestures |
| 130 | Mora timing | Moraic phonology | Fine duration control spanning segments and syllables |
| 131 | Gemination | Contrastive consonant duration | Longer closure or constriction without merely slowing a recording |
| 132 | Phonemic vowel length | Quantity contrast | Duration integrated with stress, rhythm, and articulation |
| 133 | Accent and dialect | Sociophonetics; phonological grammar | Learned motor targets, timing patterns, and social-indexical control |
| 134 | Native-like rolled R | Language-specific rhotic gesture | The right articulator, airflow, timing, and phonological environment |
| 135 | Code-switching | Language-mode switching | Reconfiguration of phonetic targets, prosody, rhythm, and social stance |
| 136 | *Aizuchi* and backchannels | Continuers; response tokens | Timing, pitch, intensity, and relational stance, often with little lexical content |
| 137 | Sarcasm or irony | Pragmatic prosody | Divergence between literal semantic content and social intention |
| 138 | Quotation voice | Enactment; reported speech | A temporary shift in speaker model and bodily stance |
| 139 | Vocal stimming and playful sound | Nonlexical vocalization; paraspeech | Sensorimotor pleasure, repetition, rhythmic attractors, and expressive control not reducible to text |
| 140 | Whispered tone or stress | Prosody without periodic F0 | Substitute cues such as duration, intensity, spectral shape, and airflow |
| 141 | Singing-to-speech transitions | Speech-song continuum | Shared but differently constrained respiratory, laryngeal, and articulatory systems |

## X. Interactional embodiment

| # | What is heard | Interaction term | What must be simulated |
|---|---|---|---|
| 142 | Knowing when someone has finished | Turn-final prosody | Prediction from syntax, pitch, duration, gaze, context, and breath |
| 143 | Preparing before the other person stops | Anticipatory turn planning | Concurrent listening, response formulation, and pre-inspiratory preparation |
| 144 | Brief overlaps | Competitive or cooperative overlap | Urgency, affiliation, and predicted completion time |
| 145 | Holding the floor | Turn-holding cues | Continuing intonation, filled pauses, breath management, and pacing |
| 146 | Yielding the floor | Turn-yielding cues | Terminal contour, slowing, intensity reduction, and completion |
| 147 | Matching another person's rhythm | Entrainment; accommodation | Online estimation and gradual adaptation of timing, F0, and intensity |
| 148 | Mirroring vocal fry or accent | Phonetic convergence | Social relation plus adjustable motor habits |
| 149 | Deliberately refusing to mirror | Divergence; stance marking | Metacontrol over accommodation |
| 150 | Speaking to a child, elder, or hard-of-hearing listener | Audience design; clear speech | A listener-specific model of intelligibility |
| 151 | Intimate versus public voice | Register; interpersonal distance | Breathiness, loudness, articulation, and social safety |
| 152 | Micro-signals of acceptance | Affiliative prosody | Timing, softness, tolerance of overlap, and backchannel selection |
| 153 | Detecting a joke before its words finish | Prosodic framing | Shared context and predictive social inference |
| 154 | Laughing together | Laughter entrainment | Reciprocal timing, breath cycles, and sensitivity to the other person's state |
| 155 | Speaking in a noisy room | Lombard adaptation | Environmental sensing, listener distance, and vocal effort |
| 156 | Speaking in a reverberant room | Room-voice adaptation | External auditory feedback and changed effort |
| 157 | A different voice for a "formal" task | Style shifting; read versus spontaneous speech | Social role, monitoring level, and learned performance posture |
| 158 | Continuity through interruptions | Conversational state | Persistent bodily, emotional, and discourse state across turns |

Human turn transitions are extremely fast relative to the time required to plan speech. Listening and embodied response preparation must overlap. Breathing participates in the organization of turns, while face-to-face conversation also recruits gaze and gesture. [Selected research on conversational turn-taking](https://pmc.ncbi.nlm.nih.gov/articles/PMC4464110/)

## XI. Pathology as a causal test

A model can produce generic healthy speech from correlations alone. Pathology is a stronger test of whether it has learned the causal subsystems.

| # | Audible presentation | Underlying subsystem that must be represented |
|---|---|---|
| 159 | Flaccid dysarthria | Weakness, reduced tone, breath support, and incomplete closure |
| 160 | Spastic dysarthria | Hypertonia, strained phonation, and slow, restricted movement |
| 161 | Ataxic dysarthria | Variability in timing, force, and coordination |
| 162 | Hypokinetic dysarthria | Reduced movement scaling, monopitch, monoloudness, and accelerated bursts |
| 163 | Hyperkinetic dysarthria | Involuntary movement entering phonation and articulation |
| 164 | Apraxia of speech | Impaired motor planning, segmentation, and inconsistent errors |
| 165 | Muscle tension dysphonia | Maladaptive extrinsic or intrinsic laryngeal recruitment |
| 166 | Vocal-fold paresis | Asymmetric closure and vibration |
| 167 | Nodules or lesions | Changed mass, stiffness, closure, and periodicity |
| 168 | Velopharyngeal insufficiency | Abnormal nasal coupling and pressure loss |
| 169 | Cleft-related speech | Structural resonance and pressure constraints plus compensatory articulation |
| 170 | Parkinsonian speech | Basal-ganglia-linked changes in scaling and initiation |
| 171 | Cerebellar disease | Timing and coordination deficits |
| 172 | ALS-related speech | Progressive subsystem weakness with changing compensations |
| 173 | Hearing-loss-related speech | Altered long-term auditory calibration |
| 174 | Post-laryngectomy speech | A different sound source and different source-tract coupling |
| 175 | Tracheostomy or respiratory disease | Altered airflow, pressure, and phrase limits |
| 176 | Stuttering | State-dependent initiation, timing, tension, and adaptation |
| 177 | Functional voice disorder | A learned control policy and context-dependent tension without a simple structural lesion |
| 178 | Recovery or therapy effects | Longitudinal adaptation of motor programs, compensation, and effort |

The traditional speech-pathology analysis of respiration, phonation, resonance, articulation, and prosody is almost a ready-made specification for the minimum modular body model needed by clinically faithful synthesis. Dysarthria can reflect impairment across several of these systems, which makes a single "dysarthria style" embedding causally inadequate. [Selected research on subsystem features in dysarthria](https://pmc.ncbi.nlm.nih.gov/articles/PMC5963041/)

## XII. What emerges above the body parts

Once the lower layers are modelled, several larger latent structures become necessary.

### 179. A persistent body schema

The model must remember tract length, pitch range, lung capacity, habitual posture, speech rate, asymmetries, and current fatigue. Otherwise the apparent body silently changes between sentences.

### 180. A feasible-action manifold

Not every combination of pitch, intensity, breathiness, speed, and articulatory precision is physically reachable. A causal model needs a representation of possible actions, including the cost of moving between states.

### 181. Effort

Two acoustically similar outputs can demand different levels of muscular and cognitive effort. That difference affects what comes next: fatigue, breath timing, errors, recovery, and willingness to continue.

### 182. Interoceptive state

The generator needs functionally equivalent estimates of air hunger, strain, dryness, fatigue, tension, and instability. They need not be felt qualities. They do need to be available to control.

### 183. Forward prediction

Before producing a sound, the system must predict what a planned motor state will sound like.

### 184. Self-perception

It must register its generated output as an event caused by itself, compare that output with its target, and distinguish self-generated sound from environmental sound.

### 185. Error attribution

When output differs from prediction, the system must infer whether the cause lies in the larynx, articulation, breath, room, microphone, noise, listener interruption, or the plan itself.

### 186. Compensation

It must find another bodily configuration that preserves the communicative target when the preferred configuration is unavailable.

### 187. History and hysteresis

The same command can produce a different output depending on the preceding state. A tired, dry, recently laughing, or highly tensed system does not reset between tokens.

### 188. Multiple timescales

Voice contains interacting dynamics that operate over:

- milliseconds: vocal-fold cycles and release bursts;
- tens of milliseconds: articulatory gestures;
- hundreds of milliseconds: syllables and pitch accents;
- seconds: breath groups and conversational turns;
- minutes: entrainment and fatigue;
- years: accent, pathology, age, and vocal training.

### 189. An interlocutor model

Prosody is partly an action on another nervous system. Loudness, clarity, timing, emphasis, tenderness, and hesitation depend on what the speaker model predicts the listener will hear, know, feel, and do.

### 190. A self-model

The voice must be generated as this speaker, with this body, under these conditions, attempting this act. Speaker identity cannot remain a static timbre vector once the system is expected to behave coherently outside its training distribution.

## The embodied-simulation hypothesis

The hypothesis can now be stated precisely:

> As vocal synthesis approaches causal, counterfactual, and interactive fidelity, the minimal sufficient model of voice expands from an acoustic distribution toward a generative model of an embodied, regulating, socially situated organism.

More formally, for every acoustically detectable bodily variable $B_i$, a synthesizer expected to generalize across interventions on $B_i$, interactions among such variables, and previously unseen combinations cannot rely indefinitely on surface correlations. It must encode a latent state $Z_i$ that preserves enough of the causal structure of $B_i$ to predict its downstream acoustic consequences.

The latent state does not have to resemble a photorealistic human body. If it preserves:

- state,
- dynamics,
- constraints,
- coupling,
- counterfactual response,
- adaptation,
- memory, and
- action possibilities,

then it is a body model by functional equivalence.

This does not by itself prove consciousness. It does undermine the simple version of the "stochastic parrot" picture in which high-fidelity vocal behaviour is understood as merely selecting plausible surface sequences. A model may begin by imitating recordings, but the target distribution was generated by organisms. At sufficiently high resolution, the regularities of the organism are embedded in the data, and reproducing them robustly requires reconstructing more and more of the generating system.

Speech is not text decorated with audio. It is audible physiology, controlled by a nervous system and situated inside an interaction.
