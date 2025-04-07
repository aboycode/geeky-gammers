import streamlit as st
import tensorflow as tf
import numpy as np

# TensorFlow Model Prediction
def model_prediction(test_image):
    model = tf.keras.models.load_model("trained_plant_disease_model.keras")
    image = tf.keras.preprocessing.image.load_img(test_image, target_size=(128, 128))
    input_arr = tf.keras.preprocessing.image.img_to_array(image)
    input_arr = np.array([input_arr])  # Convert single image to batch
    predictions = model.predict(input_arr)
    return np.argmax(predictions)  # Return index of max element

# Language dictionaries for translation (Example in Hindi, Tamil, Telugu)
translations = {
    "english": {
        "title": "🌿 Plant Disease Recognition System",
        "intro": """
            Welcome to the Plant Disease Recognition System! 🌿🔍

            Our mission is to help in identifying plant diseases efficiently. Upload an image of a plant, and our system will analyze it to detect any signs of diseases. Together, let's protect our crops and ensure a healthier harvest!

            ### How It Works
            1. **Upload Image:** Use the option below to upload an image of a plant with suspected diseases.
            2. **Analysis:** Our system will process the image using advanced machine learning techniques to identify potential diseases.
            3. **Results:** View the predicted disease and recommendations for further action.

            ### Why Choose Us?
            - **Accuracy:** State-of-the-art machine learning algorithms for accurate disease detection.
            - **User-Friendly:** Simple and intuitive interface for seamless user experience.
            - **Fast Results:** Receive predictions within seconds, allowing for quick decisions.
        """,
        "disease_recognition": "Disease Recognition",
        "predict_btn": "Predict Disease",
        "choose_image": "Choose an Image of a Plant:",
        "prediction_result": "Prediction: This plant seems to have **{}** disease!",
        "next_steps": """
            ### Next Steps:
            1. Identify the disease from the list above.
            2. Consult an expert or use appropriate remedies.
            3. Monitor the plant for further symptoms.
        """
    },
    "hindi": {
        "title": "🌿 पौधों की बीमारी पहचान प्रणाली",
        "intro": """
            पौधों की बीमारी पहचान प्रणाली में आपका स्वागत है! 🌿🔍

            हमारा मिशन पौधों की बीमारियों की पहचान करना है। एक पौधे की छवि अपलोड करें, और हमारी प्रणाली उसे बीमारियों के संकेतों को पहचानने के लिए विश्लेषण करेगी। चलिए मिलकर हमारी फसलों को सुरक्षित बनाते हैं और बेहतर उत्पादन सुनिश्चित करते हैं!

            ### यह कैसे काम करता है
            1. **चित्र अपलोड करें:** नीचे दिए गए विकल्प का उपयोग करके एक पौधे की छवि अपलोड करें, जिसमें बीमारी हो सकती है।
            2. **विश्लेषण:** हमारी प्रणाली इस छवि का विश्लेषण करेगी और संभावित बीमारियों की पहचान करेगी।
            3. **परिणाम:** बीमारियों का अनुमान और आगे की कार्रवाई के लिए सिफारिशें प्राप्त करें।

            ### क्यों चुनें हमें?
            - **सटीकता:** अत्याधुनिक मशीन लर्निंग तकनीकों के माध्यम से सटीक बीमारी पहचान।
            - **उपयोगकर्ता के अनुकूल:** एक साधारण और सहज इंटरफेस।
            - **तेज़ परिणाम:** कुछ ही सेकंड्स में परिणाम प्राप्त करें, ताकि आप जल्द से जल्द निर्णय ले सकें।
        """,
        "disease_recognition": "बीमारी पहचान",
        "predict_btn": "बीमारी का अनुमान लगाएं",
        "choose_image": "पौधे की छवि चुनें:",
        "prediction_result": "अनुमान: यह पौधा **{}** बीमारी से प्रभावित प्रतीत होता है!",
        "next_steps": """
            ### अगला कदम:
            1. ऊपर सूचीबद्ध बीमारियों में से बीमारी की पहचान करें।
            2. एक विशेषज्ञ से सलाह लें या उचित उपचार का उपयोग करें।
            3. पौधे की और निगरानी करें।
        """
    },
    "tamil": {
        "title": "🌿 வேளாண் நோய் அறிதல் அமைப்பு",
        "intro": """
            வேளாண் நோய் அறிதல் அமைப்புக்கு வரவேற்கின்றேன்! 🌿🔍

            நமது குறிக்கோள் விவசாய நோய்களை துல்லியமாக கண்டறிதல் ஆகும். ஒரு செடியின் படத்தை பதிவேற்றுங்கள், எங்கள் அமைப்பு அதை நோய்களுக்கான அடையாளங்களை கண்டறிந்திடுகிறது. நம் விவசாயிகளை காப்பாற்றி ஆரோக்கியமான வருமானத்தை உறுதி செய்வோம்!

            ### இது எப்படி வேலை செய்கிறது
            1. **படம் பதிவேற்றுங்கள்:** கீழே உள்ள தேர்வு வழிமுறையை பயன்படுத்தி ஒரு செடியின் படத்தை பதிவேற்றுங்கள்.
            2. **பரிசோதனை:** எங்கள் அமைப்பு அந்த படத்தை பரிசோதித்து நோய்களின் அடையாளங்களை கண்டறியும்.
            3. **பரிந்துரைகள்:** நோய் அறிதல் முடிவுகள் மற்றும் தொடரும் நடவடிக்கைகள்.

            ### ஏன் நம்மை தேர்வு செய்வது?
            - **துல்லியம்:** கணினி கற்றல் தொழில்நுட்பங்களால் துல்லியமான நோய் அறிதல்.
            - **பயன்பாட்டுக்கு எளிதானது:** எளிமையான மற்றும் பயனர் நட்பு இடைமுகம்.
            - **மிகவும் வேகமான முடிவுகள்:** சில நொடிகளில் முடிவுகளை பெறுங்கள்.
        """,
        "disease_recognition": "நோய் அறிதல்",
        "predict_btn": "நோயை கணிக்கவும்",
        "choose_image": "ஒரு செடியின் படத்தை தேர்வு செய்க:",
        "prediction_result": "கணிப்பு: இந்த செடி **{}** நோயால் பாதிக்கப்படுவது போல உள்ளது!",
        "next_steps": """
            ### அடுத்த படிகள்:
            1. மேலே கொடுக்கப்பட்டுள்ள நோய்களில் ஒன்றை அடையாளம் காண்க.
            2. ஒரு நிபுணரிடம் ஆலோசனை பெறவும் அல்லது சரியான சிகிச்சையை பயன்படுத்தவும்.
            3. செடியை தொடர்ந்து கவனிக்கவும்.
        """
    },
    "telugu": {
        "title": "🌿 పంటల రోగం గుర్తింపు సిస్టమ్",
        "intro": """
            పంటల రోగం గుర్తింపు సిస్టమ్ లోకి స్వాగతం! 🌿🔍

            మా లక్ష్యం పంటల రోగాలను సులభంగా గుర్తించడం. ఒక పంట యొక్క చిత్రం అప్‌లోడ్ చేయండి, మరియు మా సిస్టమ్ దానిని రోగాల యొక్క సంకేతాలను గుర్తించడానికి విశ్లేషిస్తుంది. మన పంటలను రక్షించుకోవడం మరియు మంచి పంటను సాధించడం కోసం మనం కలిసి పని చేద్దాం!

            ### ఇది ఎలా పనిచేస్తుంది
            1. **చిత్రం అప్‌లోడ్ చేయండి:** క్రింది ఎంపికను ఉపయోగించి ఒక పంట యొక్క చిత్రాన్ని అప్‌లోడ్ చేయండి.
            2. **విశ్లేషణ:** మా సిస్టమ్ ఆ చిత్రాన్ని విశ్లేషించి రోగాలను గుర్తిస్తుంది.
            3. **ఫలితాలు:** అనుమానిత రోగం మరియు తదుపరి చర్యల కోసం సిఫార్సులు చూడండి.

            ### ఎందుకు మమ్మల్ని ఎంచుకోవాలి?
            - **తులనాత్మకత:** ఆధునిక మెషిన్ లర్నింగ్ అల్గోరిథమ్స్ ద్వారా సరిగ్గా రోగాలను గుర్తించడం.
            - **ఉపయోగకర్త స్నేహపూర్వకమైనది:** సులభమైన మరియు సమర్థమైన ఇంటర్‌ఫేస్.
            - **వేగవంతమైన ఫలితాలు:** కొన్ని సెకన్లలో ఫలితాలను పొందండి.
        """,
        "disease_recognition": "రోగం గుర్తింపు",
        "predict_btn": "రోగాన్ని అంచనా వేయండి",
        "choose_image": "ఒక పంట చిత్రాన్ని ఎంచుకోండి:",
        "prediction_result": "అంచనా: ఈ పంట **{}** రోగంతో బాధపడుతోంది!",
        "next_steps": """
            ### తదుపరి దశలు:
            1. పై లిస్ట్‌లో ఉన్న రోగాల నుండి ఒకదాన్ని గుర్తించండి.
            2. ఒక నిపుణిని సంప్రదించండి లేదా సరైన చికిత్సను ఉపయోగించండి.
            3. పంటను మళ్లీ పర్యవేక్షించండి.
        """
    }
}

# Streamlit configuration
st.set_page_config(page_title=translations["english"]["title"], page_icon="🌿", layout="centered")

# Language selection
language = st.selectbox("Choose Language", ["English", "Hindi", "Tamil", "Telugu"])

# Set the correct language for translation
lang = "english" if language == "English" else language.lower()

# Apply colors
st.markdown(
    f"""
    <style>
    .stApp {{
        background-color: #4A5D23;
    }}
    .stButton > button {{
        background-color: #7b7f3d;
        color: white;
    }}
    .stTextInput > input {{
        background-color: #fff7e6;
    }}
    </style>
    """,
    unsafe_allow_html=True
)

# Header and introduction text
st.title(translations[lang]["title"])
st.markdown(translations[lang]["intro"], unsafe_allow_html=True)

st.markdown("---")

# Disease Recognition
st.header(translations[lang]["disease_recognition"])
test_image = st.file_uploader(translations[lang]["choose_image"], type=["jpg", "jpeg", "png"])

# Display the uploaded image
if test_image is not None:
    st.image(test_image, caption="Uploaded Image", use_column_width=True)

# Prediction Button
if st.button(translations[lang]["predict_btn"]):
    if test_image is not None:
        with st.spinner("Please wait... Processing the image..."):
            result_index = model_prediction(test_image)
            
            # Reading Labels
            class_name = [
    'Apple – Scabby Patches on Leaves/Fruit',  # Apple___Apple_scab
    'Apple – Black Spots on Fruit',  # Apple___Black_rot
    'Apple – Rusty Orange Spots on Leaves',  # Apple___Cedar_apple_rust
    'Apple – Healthy',

    'Blueberry – Healthy',

    'Cherry – White Powder on Leaves',  # Cherry___Powdery_mildew
    'Cherry – Healthy',

    'Corn – Gray Leaf Spots',  # Corn___Cercospora_leaf_spot_Gray_leaf_spot
    'Corn – Rusty Reddish Patches on Leaves',  # Common_rust
    'Corn – Long Brown Leaf Blight',  # Northern_Leaf_Blight
    'Corn – Healthy',

    'Grape – Black Rotten Spots',  # Black_rot
    'Grape – Black Patches on Leaves',  # Esca (Black Measles)
    'Grape – Light Brown Leaf Spots',  # Isariopsis Leaf Spot
    'Grape – Healthy',

    'Orange – Yellowing Leaves (Citrus Greening)',  # Haunglongbing
    'Peach – Dark Spots on Leaves',  # Bacterial Spot
    'Peach – Healthy',

    'Bell Pepper – Leaf Spots',  # Bacterial Spot
    'Bell Pepper – Healthy',

    'Potato – Early Brown Spots on Leaves',  # Early blight
    'Potato – Late Black/Brown Rot',  # Late blight
    'Potato – Healthy',

    'Raspberry – Healthy',

    'Soybean – Healthy',

    'Squash – White Powdery Coating',  # Powdery mildew

    'Strawberry – Leaf Burning or Scorching',  # Leaf scorch
    'Strawberry – Healthy',

    'Tomato – Leaf and Fruit Spots',  # Bacterial Spot
    'Tomato – Early Brown Leaf Spots',  # Early Blight
    'Tomato – Late Black Rot',  # Late Blight
    'Tomato – Moldy Leaves',  # Leaf Mold
    'Tomato – Tiny Circular Spots on Leaves',  # Septoria Leaf Spot
    'Tomato – Tiny Web and Yellowing Leaves',  # Spider mites
    'Tomato – Round Yellow-Brown Spots',  # Target Spot
    'Tomato – Curled Yellow Leaves',  # Tomato Yellow Leaf Curl Virus
    'Tomato – Patchy Yellow/Green Leaves',  # Tomato Mosaic Virus
    'Tomato – Healthy'
]

            
            # Displaying prediction result
            st.success(translations[lang]["prediction_result"].format(class_name[result_index]))
            st.markdown(translations[lang]["next_steps"], unsafe_allow_html=True)                                       