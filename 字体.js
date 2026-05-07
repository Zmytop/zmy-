 (function() {
            // 创建对于钢铁侠风格的一缕额外的小彩蛋: 控制台输出激活信息
            console.log("%c⚡ 钢铁侠风格字体已激活 | 方舟反应堆功率稳定  ⚡", "color: #ff884d; font-size: 16px; font-family: 'Orbitron'; background: #0a0f1a; padding: 5px 10px; border-radius: 30px; border-left: 4px solid #ff5500;");
            
            // 动态给所有 .ironman-h2, .ironman-h2-variant, .ironman-h2-mecha 增加一点随机的流光粒子效果（可选额外点缀）
            const allIronTitles = document.querySelectorAll('.ironman-h2, .ironman-h2-variant, .ironman-h2-mecha');
            if(allIronTitles.length) {
                // 为每一个钢铁侠标题增加一个数据属性并轻微调整性能 (只是让风格更鲜活)
                allIronTitles.forEach((el, idx) => {
                    // 可选: 给标题添加一个闪烁的光标边缘交互信息，但不做复杂处理，仅为了提升科技感在控制台显示
                    el.setAttribute('data-iron-index', idx + 1);
                    // 鼠标移上去时增加更强烈的反应堆光芒感 (临时类)
                    el.addEventListener('mouseenter', function(e) {
                        this.style.transition = 'all 0.1s';
                        if(this.classList.contains('ironman-h2')) {
                            this.style.setProperty('text-shadow', '0px 0px 14px #ff5e00, 0px 0px 22px #ffaa33, 3px 3px 8px black');
                        } else if(this.classList.contains('ironman-h2-variant')) {
                            this.style.setProperty('text-shadow', '0px 0px 15px #ff4d00, 0px 0px 10px #ffb347');
                        } else {
                            this.style.setProperty('text-shadow', '0px 0px 12px #f90, 0px 0px 20px #ff5e00');
                        }
                    });
                    el.addEventListener('mouseleave', function(e) {
                        // 恢复原始style (移除行内样式)
                        this.style.textShadow = '';
                        this.style.transition = '';
                    });
                });
            }
            
            // 为页面增加一个动态“电弧漂移”装饰效果，在背景上的光效位置移动(可选炫技)
            const glow = document.querySelector('.glow-dot');
            if(glow) {
                let angle = 0;
                setInterval(() => {
                    angle = (angle + 1.5) % 360;
                    let x = 60 + Math.sin(angle * Math.PI / 180) * 20;
                    let y = 30 + Math.cos(angle * 0.8 * Math.PI / 180) * 15;
                    glow.style.transform = `translate(${x - 50}%, ${y - 50}%)`;
                    glow.style.opacity = '0.6';
                }, 2800);
            }
        })();
        (function(){
        // 蝙蝠侠风格动态小特效: 控制台输出经典台词
        console.log("%c 🦇 黑暗骑士风格已加载 | I'm Batman. 🦇", "color: #f5b642; font-size: 15px; font-family: 'Bebas Neue'; background: #0a0c12; padding: 5px 12px; border-radius: 30px; border-left: 4px solid #d49b2a;");
        
        // 为所有蝙蝠侠风格的标题增加微弱的呼吸光晕 (可选，提升沉浸感)
        const batTitles = document.querySelectorAll('.batman-h2-darkknight, .batman-h2-gotham, .batman-h2-tactical');
        
        if(batTitles.length) {
            batTitles.forEach(title => {
                // 鼠标悬浮已经自带变换; 我们额外增加一个简单的“蝙蝠声呐”波纹效果（只在控制台增加互动感）
                title.addEventListener('click', () => {
                    const textVal = title.innerText.trim().substring(0, 35);
                    console.log(`🦇 蝙蝠指令: "${textVal}" — 哥谭永远需要蝙蝠侠 🦇`);
                });
                
                // 增加一点微妙的"战甲启动"光晕动画，但避免过度
                title.addEventListener('mouseenter', (e) => {
                    // 不覆盖原有样式，只是额外改善体验
                    title.style.transition = 'all 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
                });
                title.addEventListener('mouseleave', () => {
                    title.style.transform = '';
                });
            });
        }
        
        // 可选: 动态增加一个蝙蝠投影粒子效果（简单的装饰无性能问题）
        const createBatShadow = () => {
            const container = document.querySelector('.batman-container');
            if(!container) return;
            // 这个纯装饰，不加过多元素了，保持干净。
        };
        createBatShadow();

        // 对于.code样式使用（展示信息高亮模拟）
        const styleCodes = document.querySelectorAll('.info-note code');
        if(styleCodes.length) {
            styleCodes.forEach(code => {
                code.style.backgroundColor = '#1e1f2c';
                code.style.padding = '2px 6px';
                code.style.borderRadius = '10px';
                code.style.color = '#ffcf6e';
                code.style.fontFamily = 'monospace';
            });
        }
    })();
    (function() {
        console.log("%c 🤖 擎天柱风格字体已激活 | 汽车人，变形出发！ 🤖", "color: #ff8c42; font-size: 15px; font-family: 'Orbitron'; background: #03060e; padding: 6px 12px; border-radius: 40px; border-left: 5px solid #2a7fff;");
        
        const primeTitles = document.querySelectorAll('.prime-h2-leader, .prime-h2-cybertron, .prime-h2-blade');
        if(primeTitles.length) {
            primeTitles.forEach(title => {
                // 点击彩蛋
                title.addEventListener('click', () => {
                    const textVal = title.innerText.trim().substring(0, 40);
                    console.log(`⚡ 擎天柱指令: “${textVal}” — 自由是所有感知生命的权利 ⚡`);
                });
                // 悬停时增加能量微光（不破坏原本hover，只是叠加）
                title.addEventListener('mouseenter', (e) => {
                    title.style.transition = 'all 0.2s';
                });
            });
        }
        
        // 让样式内 code 看起来更舒适
        const infoCodes = document.querySelectorAll('.info-note code');
        infoCodes.forEach(code => {
            code.style.backgroundColor = '#0f1a2f';
            code.style.padding = '2px 8px';
            code.style.borderRadius = '12px';
            code.style.color = '#ffb347';
        });
    })();