let textArr = [{
    name: 'h2',
    class: 'inten',
    text: '岗位：嵌入式开发工程师'
}, {
    name: 'h4',
    class: 'text-title',
    text: '个人信息'
}, {
    name: 'div',
    class: 'base-info',
    children: [{
        name: 'div',
        children: [{
            name: 'div',
            text: '基本信息：邱立威/男/24岁'
        }, {
            name: 'div',
            text: '联系电话：13017181138'
        }]
    }, {
        name: 'div',
        children: [{
            name: 'div',
            text: '学    历：本科/湖南农业大学/物联网工程'
        }, {
            name: 'div',
            text: '联系邮箱：vector.qiu@gmail.com'
        }]
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '教育背景'
}, {
    name: 'div',
    class: 'school',
    children: [{
        name: 'span',
        class: 'mr',
        text: '2018.09 — 2022.06'
    }, {
        name: 'span',
        class: 'mr',
        text: '湖南农业大学(本科)'
    }, {
        name: 'span',
        text: '物联网工程专业',
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '专业技能'
}, {
    // 硬件:原理图，芯片手册，常用仪器 万用表/示波器/逻辑分析仪
    // 编程语言：C/C++/Shell/Python/Rust/ARM汇编
    // 编译器：ARM-Clang ARM-GCC ARM-CC
    // 工具软件：Git VScode MDK IAR J-link Ozone J-Falsh Ubuntu 总线调试软件(逻辑分析仪，CAN盒，串口调试助手)
    // RTOS: RT-Thread,uCOS-III,FreeRTOS,ThreadX
    // 处理器：ARM-Cortex-M3 M4 M23 STM32 F1 F4 H7,GD32E23xx GD32F30x CS32F03x(芯海) 中微8051 STM32F103 F407 H7
    // 内核: ARM-Cortex-M3 M4
    // 总线：Multi-AHB总线矩阵
    // 控制器：DMA FMC LCD-TFT NVIC EXTI MPU
    // 外设接口: Tim(高级/通用/基本/独立看门狗/窗口看门狗/SysTick)
    //          I2C(内部集成电路接口)
    //          UART/USART(通用同步/异步收发器)
    //          SPI/QSPI(串行外设接口)
    //          I2S(内部集成音频)
    //          SAI1(串行音频接口)
    //          PPLI2S(音频PLL)
    //          PPLSAI(音频和LCD PPL)
    //          SDIO(安全数字输入/输出接口)
    //          以太网MAC (MDA IEEE1588)
    //          bxCAN(控制区域网络)
    //          OTG_FS(通用串行总线on-the-go全速)
    //          OTG_HS(通用串行总线on-the-go高速)
    //          DCMI(数字摄像头)
    //          RNG(随机数发生器)
    //          GPIO(通用输入/输出)
    //          ADC(模数转换器)
    //          温度传感器
    //          DAC(数码转换器)
    //          JTAG/SWD(串行线调试端口)
    //          嵌入式跟踪宏单元
    // 驱动: SPI/QSPI Nor Flash (SFUD) Nand Flash(GD XTX),气压计lqbp001 aw20xxx PWM驱动 驱动解耦 性能优化
    // 模块: FLM下载算法 AC风机斩波控制 红外编解码/通信  集尘 沿边 回充
    //  模块通信协议 AES backtrace CRC MD5 滤波器 FS 状态机 LOG MEM SHELL PID 日志存储 OTA(升级 loader) GUI(字体，刷图) 按键 PID 异常处理
    // 控制：电机控制 直流电机、步进电机 温控
    // 项目协作
    // 模块抽象，架构，实现
    // 具备底层软件开发，平台开发，设备驱动，功耗，性能，稳定性能力
    // 良好的编程习惯，简洁，高效，稳定的代码 GhatGPT
    // 量产项目开发经历
    name: 'ul',
    class: 'ul-list',
    children: [{
        name: 'li',
        text: '熟练掌握',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'C/C++/Shell/Python/Rust/ARM汇编'
        }, {
            name: 'span',
            text: '等编程语言'
        }]
    }, {
        name: 'li',
        text: '有一定的硬件基础，能看懂原理图&PCB，芯片手册等文档，掌握常用仪器使用,',
        children: [{
            name: 'span',
            class: 'tag',
            text: '万用表/示波器/逻辑分析仪'
        }]
    }, {
        name: 'li',
        text: '熟练掌握',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'Git、VScode、MDK、IAR等工具技术'
        }, {
            name: 'span',
            text: '，J-link Ozone J-Falsh等调试工具'
        }]
    }, {
        name: 'li',
        text: '熟悉ARM-Cortex-M3 M4内核'
    }, {
        name: 'li',
        text: '熟悉',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'RT-Thread、uCOS-III、FreeRTOS、ThreadX'
        }, {
            name: 'span',
            text: ' RTOS'
        }]
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '生涯履历'
}, {
    name: 'div',
    class: 'work',
    children: [{
        name: 'span',
        class: 'mr',
        text: '2022.02 — 2024.02'
    }, {
        name: 'span',
        text: '助理嵌入式开发工程师'
        // leader
        // 在T2770项目中，完成FLASH驱动，FLASH升级，锅炉检测等模块功能开发，并高效交付。
        // 在入职的6个月内，完成从职场新人到技术工程师的快速转身，可以独立承担T2770 T2740等项目的模块开发任务。
        // 在成长的道路上，尽职尽责，持续学习，追求卓越，获得Mentor PL 嵌入式团队，项目组的一致好评。
    }]
}, {
    name: 'ul',
    class: 'ul-list',
    // 嵌入式平台：RT-Thread平台驱动、通用模块开发，模块解耦 性能优化 芯片移植，SPI,QSPI,Nor Nand FLASH，气压计，LED驱动芯片aw20xxx，J-link Flash烧录程序
    // 洗地机项目：业务开发，LED交互，锅炉
    // 吸尘器项目：业务开发，集尘基站(充电，集尘)，多模块通信
    // 扫地机项目：基站业务开发(裸机开发，定时器调度，状态机，充电，集尘，回充，产测，低功耗)，红外交互开发，集尘模块，沿边模块，回充模块
    children: [{
        name: 'li',
        text: '从普通开发人员，升任到子非鱼公司Web技术部主管，负责',
        children: [{
            name: 'span',
            class: 'tag',
            text: '带领新人、项目安排、产品优化'
        }, {
            name: 'span',
            text: '，定期组织开展BUG研讨技术会，为公司奠定了技术基础'
        }]
    }, {
        name: 'li',
        text: '负责公司Web项目全周期，后期负责AI类查询项目，参与产品线核心功能的架构设计，技术方案调研工作'
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '高级项目'
}, {
    name: 'div',
    class: 'item-lv',
    children: [{
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            class: 'project-title',
            text: '项目一：洗地机'
        }, {
            name: 'li',
            text: '使用平台：LCD GD32F303CGT6 主控GD32F303RET6 底盘GD32F303CB'
        }, {
            name: 'li',
            text: '使用技术栈：Gap框架、',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'Vue全家桶、 Express/Koa框架'
            }]
        }, {
            name: 'li',
            text: '项目描述：'
        }]
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            class: 'project-title',
            text: '项目二：吸尘器'
        }, {
            name: 'li',
            text: '使用平台：芯海CS32F03x 中微8051'
        }, {
            name: 'li',
            text: '使用技术栈：',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'Vue全家桶、'
            }, {
                name: 'span',
                text: '高德官方'
            }, {
                name: 'span',
                class: 'tag',
                text: 'cube-ui'
            }, {
                name: 'span',
                text: '框架、'
            }, {
                name: 'span',
                class: 'tag',
                text: 'BeautifulSoup多端打包'
            }]
        }, {
            name: 'li',
            text: '项目描述：'
        }]
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            class: 'project-title',
            text: '项目三：扫地机器人'
        }, {
            name: 'li',
            text: '使用平台：扫地机-AM790，基站-GD32E230G8U6'
        }, {
            name: 'li',
            text: '使用技术栈：',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'Vue全家桶、'
            }, {
                name: 'span',
                text: '高德官方'
            }, {
                name: 'span',
                class: 'tag',
                text: 'cube-ui'
            }, {
                name: 'span',
                text: '框架、'
            }, {
                name: 'span',
                class: 'tag',
                text: 'BeautifulSoup多端打包'
            }]
        }, {
            name: 'li',
            text: '项目描述：'
        }]
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '自我评价'
}, {
    // 具有较好的学习能力，问题分析和解决能力，注重团队合作
    name: 'ul',
    class: 'ul-list',
    children: [{
        name: 'li',
        text: '具有',
        children: [{
            name: 'span',
            class: 'tag',
            text: '团队管理经验'
        }, {
            name: 'span',
            text: '，拥有良好的'
        }, {
            name: 'span',
            class: 'tag',
            text: '团队协调能力'
        }, {
            name: 'span',
            text: '，与同事配合极其默契'
        }]
    }, {
        name: 'li',
        text: '有很强的',
        children: [{
            name: 'span',
            class: 'tag',
            text: '自学及动手能力'
        }, {
            name: 'span',
            text: '，善于接受新事物，精通'
        }, {
            name: 'span',
            class: 'tag',
            text: '全栈'
        }, {
            name: 'span',
            text: '开发'
        }]
    }, {
        name: 'li',
        text: '性格随和、诚恳稳重、身体素质较好、适应环境能力强'
    }]
}]
let style = `
    /*
    * 面试官您好，我是Vector
    * 特此准备了一份在线简历
    * 先准备一些样式
    */
    *{
        transition: all .8s;
    }
    /* 容器中要添加点样式 */
    #codeEdit{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /* 再来点代码高亮 */
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #2eb996;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /* 好啦,右边就是我的简历，望查阅指正 */
`
let balloon = `
    <div class="balloon-wrap">
        <img src="img/balloon.png" id="bg-balloon-small">
        <img src="img/balloon.png" id="bg-balloon-large">
        <img src="img/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`