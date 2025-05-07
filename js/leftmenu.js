let selectedCategories = []; // Global state
let currentTooltip = null;

let categoryDataComplete = [
    {
        category_code: "010",
        category_name: "ラケット",
        description: ""
    },
    {
        category_code: "020",
        category_name: "シューズ",
        description: ""
    },
    {
        category_code: "030",
        category_name: "ストリング（単張）",
        description: ""
    },
    {
        category_code: "040",
        category_name: "ストリング（ロール他）",
        description: ""
    },
    {
        category_code: "050",
        category_name: "ボール",
        description: ""
    },
    {
        category_code: "060",
        category_name: "シャトル",
        description: ""
    },
    {
        category_code: "070",
        category_name: "ラバー",
        description: ""
    },
    {
        category_code: "080",
        category_name: "ウェア（メンズ/ユニ）",
        description: ""
    },
    {
        category_code: "090",
        category_name: "ウェア（レディース）",
        description: ""
    },
    {
        category_code: "095",
        category_name: "ウェア（ジュニア）",
        description: ""
    },
    {
        category_code: "100",
        category_name: "アンダーウェア",
        description: ""
    },
    {
        category_code: "110",
        category_name: "サポーターケア商品",
        description: ""
    },
    {
        category_code: "120",
        category_name: "バッグ",
        description: ""
    },
    {
        category_code: "130",
        category_name: "アクセサリ・小物",
        description: ""
    },
    {
        category_code: "140",
        category_name: "コート用品",
        description: ""
    },
    {
        category_code: "150",
        category_name: "ジュニアグッズ",
        description: ""
    },
    {
        category_code: "160",
        category_name: "ストリングマシン",
        description: ""
    },
    {
        category_code: "170",
        category_name: "書籍・DVD",
        description: ""
    },
    {
        category_code: "180",
        category_name: "サプリメント・ドリンク",
        description: ""
    },
    {
        category_code: "190",
        category_name: "トレーニング用品",
        description: ""
    },
    {
        category_code: "200",
        category_name: "設備・備品",
        description: ""
    },
    {
        category_code: "210",
        category_name: "バット",
        description: ""
    },
    {
        category_code: "220",
        category_name: "グローブ",
        description: ""
    },
    {
        category_code: "230",
        category_name: "手袋",
        description: ""
    },
    {
        category_code: "240",
        category_name: "グランド用品",
        description: ""
    },
    {
        category_code: "250",
        category_name: "プロテクター",
        description: ""
    },
    {
        category_code: "260",
        category_name: "練習器具",
        description: ""
    },
    {
        category_code: "270",
        category_name: "工賃",
        description: ""
    },
    {
        category_code: "999",
        category_name: "その他",
        description: ""
    }, {
        category_code: "240",
        category_name: "グランド用品",
        description: ""
    },
    {
        category_code: "250",
        category_name: "プロテクター",
        description: ""
    },
    {
        category_code: "260",
        category_name: "練習器具",
        description: ""
    },
    {
        category_code: "270",
        category_name: "工賃",
        description: ""
    },
    {
        category_code: "999",
        category_name: "その他",
        description: ""
    },
    
];

// Dummy Brand Data
const brandList = [
    { brand_code: "010", brand_name: "テニス", brand_kana: "テニス" },
    { brand_code: "020", brand_name: "ソフトテニス", brand_kana: "ソフトテニス" },
    { brand_code: "030", brand_name: "バドミントン", brand_kana: "バドミントン" },
    { brand_code: "040", brand_name: "テニス・バドミントン", brand_kana: "テニス・バドミントン" },
    { brand_code: "050", brand_name: "卓球", brand_kana: "卓球" },
    { brand_code: "060", brand_name: "スカッシュ", brand_kana: "スカッシュ" },
    { brand_code: "065", brand_name: "ピックルボール", brand_kana: "ピックルボール" },
    { brand_code: "070", brand_name: "ラケットボール", brand_kana: "ラケットボール" },
    { brand_code: "075", brand_name: "パデル", brand_kana: "パデル" },
    { brand_code: "080", brand_name: "ランニング", brand_kana: "ランニング" },
    { brand_code: "090", brand_name: "フィットネス", brand_kana: "フィットネス" },
    { brand_code: "100", brand_name: "ウォーキング", brand_kana: "ウォーキング" },
    { brand_code: "110", brand_name: "バレーボール", brand_kana: "バレーボール" },
    { brand_code: "111", brand_name: "ソフトバレーボール", brand_kana: "ソフトバレーボール" },
    { brand_code: "120", brand_name: "野球", brand_kana: "野球" },
    { brand_code: "121", brand_name: "ソフトボール", brand_kana: "ソフトボール" },
    { brand_code: "122", brand_name: "軟式野球", brand_kana: "軟式野球" },
    { brand_code: "130", brand_name: "陸上", brand_kana: "陸上" },
    { brand_code: "140", brand_name: "グラウンドゴルフ", brand_kana: "グラウンドゴルフ" },
    { brand_code: "150", brand_name: "サッカー", brand_kana: "サッカー" },
    { brand_code: "160", brand_name: "フットサル", brand_kana: "フットサル" },
    { brand_code: "170", brand_name: "ラグビー", brand_kana: "ラグビー" },
    { brand_code: "180", brand_name: "バスケットボール", brand_kana: "バスケットボール" },
    { brand_code: "190", brand_name: "アメフト", brand_kana: "アメフト" },
    { brand_code: "200", brand_name: "ハンドボール", brand_kana: "ハンドボール" },
    { brand_code: "210", brand_name: "レスリング", brand_kana: "レスリング" },
    { brand_code: "220", brand_name: "フェンシング", brand_kana: "フェンシング" },
    { brand_code: "230", brand_name: "体操", brand_kana: "体操" },
    { brand_code: "240", brand_name: "ボクシング", brand_kana: "ボクシング" },
    { brand_code: "241", brand_name: "ムエタイ", brand_kana: "ムエタイ" },
    { brand_code: "242", brand_name: "総合格闘技", brand_kana: "総合格闘技" },
    { brand_code: "250", brand_name: "太極拳", brand_kana: "太極拳" },
    { brand_code: "260", brand_name: "綱引き", brand_kana: "綱引き" },
    { brand_code: "270", brand_name: "トレイル", brand_kana: "トレイル" },
    { brand_code: "280", brand_name: "アウトドア", brand_kana: "アウトドア" },
    { brand_code: "290", brand_name: "柔道", brand_kana: "柔道" },
    { brand_code: "300", brand_name: "剣道", brand_kana: "剣道" },
    { brand_code: "301", brand_name: "スポーツチャンバラ", brand_kana: "スポーツチャンバラ" },
    { brand_code: "310", brand_name: "空手", brand_kana: "空手" },
    { brand_code: "311", brand_name: "日本拳法", brand_kana: "日本拳法" },
    { brand_code: "320", brand_name: "居合・なぎなた", brand_kana: "居合・なぎなた" },
    { brand_code: "321", brand_name: "弓道", brand_kana: "弓道" },
    { brand_code: "330", brand_name: "合気道", brand_kana: "合気道" },
    { brand_code: "340", brand_name: "相撲", brand_kana: "相撲" },
    { brand_code: "345", brand_name: "ゴルフ", brand_kana: "ゴルフ" },
    { brand_code: "350", brand_name: "パークゴルフ", brand_kana: "パークゴルフ" },
    { brand_code: "360", brand_name: "ゲートボール", brand_kana: "ゲートボール" },
    { brand_code: "370", brand_name: "ニュースポーツ・リクレエーション", brand_kana: "ニュースポーツ・リクレエーション" },
    { brand_code: "380", brand_name: "体育館用品", brand_kana: "体育館用品" },
    { brand_code: "390", brand_name: "運動会用品", brand_kana: "運動会用品" },
    { brand_code: "400", brand_name: "体力測定", brand_kana: "体力測定" },
    { brand_code: "410", brand_name: "運動場用品", brand_kana: "運動場用品" },
    { brand_code: "420", brand_name: "銃剣道", brand_kana: "銃剣道" },
    { brand_code: "430", brand_name: "ウェイトリフティング", brand_kana: "ウェイトリフティング" },
    { brand_code: "440", brand_name: "水泳", brand_kana: "水泳" },
    { brand_code: "450", brand_name: "ビーチバレー", brand_kana: "ビーチバレー" },
    { brand_code: "460", brand_name: "ビーチサッカー", brand_kana: "ビーチサッカー" },
    { brand_code: "470", brand_name: "ビーチハンドボール", brand_kana: "ビーチハンドボール" },
    { brand_code: "480", brand_name: "ドッジボール", brand_kana: "ドッジボール" },
    { brand_code: "490", brand_name: "ドッヂビー", brand_kana: "ドッヂビー" },
    { brand_code: "500", brand_name: "フラッグフットボール", brand_kana: "フラッグフットボール" },
    { brand_code: "501", brand_name: "セストボール", brand_kana: "セストボール" },
    { brand_code: "510", brand_name: "フットベースボール", brand_kana: "フットベースボール" },
    { brand_code: "520", brand_name: "グランドソフトボール", brand_kana: "グランドソフトボール" },
    { brand_code: "530", brand_name: "ハンドベースボール", brand_kana: "ハンドベースボール" },
    { brand_code: "540", brand_name: "ポートボール", brand_kana: "ポートボール" },
    { brand_code: "550", brand_name: "ウォーターポロ", brand_kana: "ウォーターポロ" },
    { brand_code: "560", brand_name: "ユニカール", brand_kana: "ユニカール" },
    { brand_code: "570", brand_name: "スティックボール", brand_kana: "スティックボール" },
    { brand_code: "580", brand_name: "ボッチャ", brand_kana: "ボッチャ" },
    { brand_code: "590", brand_name: "ティーボール", brand_kana: "ティーボール" },
    { brand_code: "600", brand_name: "フリーテニス", brand_kana: "フリーテニス" },
    { brand_code: "610", brand_name: "縄跳び", brand_kana: "縄跳び" },
    { brand_code: "620", brand_name: "サイクリング", brand_kana: "サイクリング" },
    { brand_code: "630", brand_name: "登山・トレッキング", brand_kana: "登山・トレッキング" },
    { brand_code: "640", brand_name: "スキー", brand_kana: "スキー" },
    { brand_code: "650", brand_name: "スノーボード", brand_kana: "スノーボード" },
    { brand_code: "990", brand_name: "オールスポーツ", brand_kana: "オールスポーツ" },
    { brand_code: "998", brand_name: "ライフスタイル", brand_kana: "ライフスタイル" },
    { brand_code: "999", brand_name: "その他", brand_kana: "その他" }
];

// Join kana Groups
const kanaGroups = {
    "ア": ["ア", "イ", "ウ", "エ", "オ"],
    "カ": ["カ", "キ", "ク", "ケ", "コ"],
    "サ": ["サ", "シ", "ス", "セ", "ソ"],
    "タ": ["タ", "チ", "ツ", "テ", "ト"],
    "ナ": ["ナ", "ニ", "ヌ", "ネ", "ノ"],
    "ハ": ["ハ", "ヒ", "フ", "ヘ", "ホ"],
    "マ": ["マ", "ミ", "ム", "メ", "モ"],
    "ヤ": ["ヤ", "ユ", "ヨ"],
    "ラ": ["ラ", "リ", "ル", "レ", "ロ"],
    "ワ": ["ワ", "ヲ", "ン"]
};

// Function to render brand sections grouped by kana
function renderBrandGroups() {
    const container = document.getElementById("brandSectionsContainer");
    container.innerHTML = "";

    // Sort brand list by brand_kana in Japanese locale
    const sorted = [...brandList].sort((a, b) => a.brand_kana.localeCompare(b.brand_kana, "ja"));

    const groupedBrands = {};
    // Initialize groups
    for (const kanaGroup in kanaGroups) {
        groupedBrands[kanaGroup] = [];
    }

    // Assign each brand to its corresponding group
    sorted.forEach(brand => {
        const firstKana = brand.brand_kana.charAt(0);
        for (const kanaGroup in kanaGroups) {
            if (kanaGroups[kanaGroup].includes(firstKana)) {
                groupedBrands[kanaGroup].push(brand);
                break;
            }
        }
    });

    // Render sections for each group
    for (const kanaGroup in groupedBrands) {
        const brands = groupedBrands[kanaGroup];

        const section = document.createElement("div");
        section.className = "brand-kana-section";
        section.id = `section-${kanaGroup}`; // Set ID for scrolling

        const header = document.createElement("div");
        header.className = "brand-kana-header";
        header.textContent = kanaGroup;
        section.appendChild(header);

        const list = document.createElement("div");
        list.className = "brand-list";

        brands.forEach(brand => {
            const span = document.createElement("span");
            span.textContent = brand.brand_name;
            // span.textContent= brand.brand_code;
            span.addEventListener("click", () => {
                document.getElementById("selectedBrandDisplay").textContent = brand.brand_name;
                document.getElementById("selectedBrandCode").value = brand.brand_code;
                closeModal();
            });
            list.appendChild(span);
        });

        section.appendChild(list);
        container.appendChild(section);
    }
}

// Open Modal
function openModal() {
    document.getElementById("brandModal").style.display = "block";
    renderBrandGroups();
}

// Close Modal
function closeModal() {
    document.getElementById("brandModal").style.display = "none";
}

// Kana buttons event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".brand-kana-buttons button").forEach(button => {
        button.addEventListener("click", () => {
            const kana = button.getAttribute("data-kana");
            const section = document.getElementById(`section-${kana}`);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

// Tooltip functions
function showTooltip(el) {
    el.title = el.textContent;
}
function hideTooltip(el) {
    el.title = "";
}

$(document).ready(function () {
    // categoryModel
  
    //csv modal 
    $(document).on("click", "#CSV-popup", function () {
        $(" #CSVmodal").fadeIn();
    });

    $(document).on("click", "#CSV-popup1", function () {
        $("#CSVmodal1").fadeIn();
    });

    $(document).on("click", ".close-popup, .popup-close-btn", function () {
        $(".overlay,  #CSVmodal, #CSVmodal1").fadeOut();
    });

    //click outside func
    $(document).on("click", "#CSVmodal, #CSVmodal1 ,#CSVerrorcheck ", function (e) {
        if ($(e.target).is("#CSVmodal, #CSVmodal1, #CSVerrorcheck")) {
            $("#CSVmodal, #CSVmodal1,#CSVerrorcheck").fadeOut();
        }
    });

    $(".csv-file").click(function () {
        $("#real-file").click();
    });

    // Handle file selection
    $("#real-file").on("change", function () {
        const fileName = $(this).prop("files")[0]?.name || "";
        $(".ip-csv").val(fileName);
    });

    //error check function
    $(".csv-submit").click(function (e) {
        const fileInput = $("#real-file")[0];
        const file = fileInput.files[0];
        // If no file is selected
        if (!file) {
            e.preventDefault();
            $("#CSVerrorcheck").show();
            return;
        }
        // Check file extension
        const fileName = file.name;
        const isCSV = fileName.toLowerCase().endsWith(".csv");

        if (!isCSV) {
            e.preventDefault();
            $("#CSVerrorcheck").show();
            return;
        }
        // Valid file — show loading view
        $("#CSVloading").show();
        const loadingDuration = 5000; // e.g., 7000ms = 7 seconds
        setTimeout(function () {
            $("#CSVloading").hide();
            $("#real-file").val("");
            $(".ip-csv").val("");
        }, loadingDuration);
    });

    $(document).on("click", "#CSVloading .popup-close-btn, #CSVerrorcheck .popup-close-btn", function () {
        $("#CSVloading, #CSVerrorcheck").hide(function () {
            $("#CSVmodal").show();
            $("#real-file").val("");
            $(".ip-csv").val("");
        });
    });

    // Category Modal
    $(".category-model-open").click(function () {
        console.log("Category model open clicked");
    $("#categoryModel").fadeIn(300); // 300ms animation
    $("#CategoryOverlay").fadeIn(300); // 300ms animation
    });     
    
       // Close the modal with fade out
$("#closeBtn, #closeModalBtn").click(function () {
    $("#categoryModel").fadeOut(300); // 300ms animation
    $("#CategoryOverlay").fadeOut(300); // 300ms animation
});
$('#closeModal, #closeModalBtn').on('click', function () {
    $('#overlay').fadeOut();
    $('#newsModal').fadeOut();
});

});

function showTooltip(element) {
    let tooltip = document.querySelector('.tooltip-box');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.classList.add('tooltip-box');
        document.body.appendChild(tooltip);
    }
    tooltip.textContent = element.textContent.trim();
    if (element.scrollWidth - element.clientWidth > 1) {
        const rect = element.getBoundingClientRect();
        tooltip.style.display = 'block';
        tooltip.style.top = `${rect.top + window.scrollY + element.offsetHeight + 15}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;

        let tooltipRect = tooltip.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (tooltipRect.right > windowWidth) {
            let currentLeft = parseInt(tooltip.style.left) || 0;
            let newLeft = currentLeft - (tooltipRect.right - windowWidth) - 50;
            tooltip.style.left = `${newLeft}px`;

            tooltipRect = tooltip.getBoundingClientRect();

            let arrowLeft = rect.left - tooltipRect.left + element.offsetWidth / 4 - 15;
            tooltip.style.setProperty('--tooltip-arrow-left', `${arrowLeft}px`);
        } else {
            let arrowLeft = element.offsetWidth / 4 - 15;
            tooltip.style.setProperty('--tooltip-arrow-left', `${arrowLeft}px`);
        }
    } else {
        tooltip.style.display = 'none';
    }
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip-box');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}




let categoryGrid = document.querySelector(".category-grid");
categoryGrid.innerHTML = ""; // Clear previous rows

for (let i = 0; i < categoryDataComplete.length; i += 3) {
    let row = document.createElement('div');
    row.className = 'category-row';

    for (let j = i; j < i + 3 && j < categoryDataComplete.length; j++) {
        let category = categoryDataComplete[j];

        let label = document.createElement('label');
        label.className = 'category-tooltip-input';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = category.category_code;
        checkbox.dataset.name = category.category_name;

        // Maintain checked state
        if (selectedCategories.find(c => c.code === category.category_code)) {
            checkbox.checked = true;
        }

        // Handle checkbox changes
        checkbox.addEventListener('change', function () {
            const code = this.value;
            const name = this.dataset.name;

            if (this.checked) {
                if (!selectedCategories.some(c => c.code === code)) {
                    selectedCategories.push({ name, code });
                }
            } else {
                selectedCategories = selectedCategories.filter(c => c.code !== code);
            }

            updateSelectedCategoriesDisplay();
        });

        label.appendChild(checkbox);
        label.append(" " + category.category_name);

        label.onmouseenter = () => showTooltipCategory(checkbox);
        label.onmouseleave = () => hideTooltipCategory();

        row.appendChild(label);
    }

    categoryGrid.appendChild(row);
}

// After rendering all checkboxes
updateSelectedCategoriesDisplay();


function isOverflowing(element) {
    return element.scrollWidth > element.clientWidth;
}

function showTooltipCategory(element) {
    if (currentTooltip) {
        document.body.removeChild(currentTooltip);
        currentTooltip = null;
    }

    const label = element.parentElement;

    if (!isOverflowing(label)) {
        return;
    }

    currentTooltip = document.createElement('div');
    currentTooltip.classList.add('category-tooltip-box');
    currentTooltip.textContent = label.textContent.trim();
    document.body.appendChild(currentTooltip);

    const rect = label.getBoundingClientRect();
    currentTooltip.style.display = 'block';
    currentTooltip.style.top = `${rect.bottom + window.scrollY}px`;
    currentTooltip.style.left = `${rect.left + window.scrollX}px`;

    const tooltipRect = currentTooltip.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    if (tooltipRect.right > windowWidth) {
        const overflow = tooltipRect.right - windowWidth;
        currentTooltip.style.left = `${rect.left + window.scrollX - overflow - 10}px`;
    }
}

function hideTooltipCategory() {
    if (currentTooltip) {
        document.body.removeChild(currentTooltip);
        currentTooltip = null;
    }
}

        function updateSelectedCategoriesDisplay(){
            let selected = document.querySelectorAll(".category-tooltip-input input:chekced");
            let selectedNames = Array.from(selected).map(cb => cb.parentElement.textContent.trim());
            document.getElementById("selectedCategoriesDisplay").textContent = selectedNames.join("、") || "未選択";

        }




    function showTooltipCategory(element) {
        if (currentTooltip) {
            document.body.removeChild(currentTooltip);
            currentTooltip = null;
        }
    
        const label = element.parentElement;
    
        if (!isOverflowing(label)) {
            return;
        }
    
        currentTooltip = document.createElement('div');
        currentTooltip.classList.add('category-tooltip-box');
        currentTooltip.textContent = label.textContent.trim();
        document.body.appendChild(currentTooltip);
    
        const rect = label.getBoundingClientRect();
        currentTooltip.style.display = 'block';
        currentTooltip.style.top = `${rect.bottom + window.scrollY}px`;
        currentTooltip.style.left = `${rect.left + window.scrollX}px`;
    
        const tooltipRect = currentTooltip.getBoundingClientRect();
        const windowWidth = window.innerWidth;
    
        if (tooltipRect.right > windowWidth) {
            const overflow = tooltipRect.right - windowWidth;
            currentTooltip.style.left = `${rect.left + window.scrollX - overflow - 10}px`;
        }
    }
    
    function hideTooltipCategory() {
        if (currentTooltip) {
            document.body.removeChild(currentTooltip);
            currentTooltip = null;
        }
    }
    function updateSelectedCategoriesDisplay() {
        const display = document.getElementById("selectedCategoriesDisplay");
        const names = selectedCategories.map(item => item.name);
        display.textContent = names.length > 0 ? names.join("、") : "未選択";
    }

   
updateSelectedCategoriesDisplay();

  