---
title: Arm Compiler
comments: true
published: true
lang: zh-CN
date: 2024-12-05 10:36:00
updated:
tags:
- Arm Compiler
categories:
- [系统架构, 编译器, 交叉编译工具链]
---
# Arm Compiler

> 参考资料：
>
> [Arm Compiler for Embedded](https://developer.arm.com/Tools%20and%20Software/Arm%20Compiler%20for%20Embedded)
>
> [Arm Compiler for Embedded Reference Guide](https://developer.arm.com/documentation/101754/0623/)
>
> [gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)
>
> [Breeze系列四轴飞行器项目](https://microdynamics.github.io/)

## 目录

- [Arm Compiler](#arm-compiler)
  - [目录](#目录)
  - [简介](#简介)
  - [ARM Compiler 5](#arm-compiler-5)
  - [ARM Compiler 6](#arm-compiler-6)
  - [ARM GNU GCC](#arm-gnu-gcc)
  - [ARM Clang 和 ARM CC 的对比](#arm-clang-和-arm-cc-的对比)

## 简介

Arm Compiler for Embedded（简称 **Arm Compiler**）是 Arm 公司推出的专为嵌入式系统开发设计的编译器工具链。它为开发者提供了高效、优化良好的代码生成，并支持针对 Arm 架构的多种平台。作为嵌入式开发的核心工具之一，Arm Compiler 已被广泛应用于从小型设备到大型系统的开发中。Arm 编译器支持包括 Cortex-M、Cortex-R 和 Cortex-A 系列处理器在内的多个 Arm 处理器。

**ARM CC** 是 ARM 自家的编译工具链，专为 ARM 架构设计，能够生成高效的机器代码。ARM Compiler 5（AC5）和 ARM Compiler 6（AC6）是 ARM 公司的两代编译器，其中 ARM Compiler 6 是基于 LLVM 技术的 Clang 编译器，而 ARM Compiler 5 则基于 GCC 编译器。

**Arm Compiler 特点：**

- **专为 ARM 优化**：ARM CC 编译器是由 ARM 自行开发，能够深度挖掘 ARM 处理器的硬件特性，提供出色的性能优化，尤其是在 ARM 的 Cortex-A 系列和 Cortex-M 系列中。
- **高级优化支持**：相比 GNU GCC，ARM CC 提供了更为细粒度的优化选项，能够更好地利用 ARM 硬件特性，生成高效的机器码。
- **集成调试支持**：ARM CC 工具链与 ARM 的调试工具（如 ARM DS-5、Keil μVision）无缝集成，为嵌入式开发提供全面的调试支持。
- **付费软件**：ARM CC 是 ARM 的商业产品，需要购买许可证。
- **较为封闭**：相对于开源的 GNU GCC，ARM CC 的使用和支持较为封闭，遇到问题时可能需要依赖 ARM 的技术支持。

## ARM Compiler 5

**ARM CC** 是 ARM 公司早期推出的一款专有编译器，属于 ARM Compiler 5 工具链的一部分。它基于 ARM 公司的专有技术构建，特别针对嵌入式开发进行了大量优化。

**ARM Compiler 5 特点：**

- **成熟稳定**：ARM CC 是经过多年开发和完善的编译器，拥有强大的稳定性。

- **ARM 架构特定优化**：对 ARM 的指令集进行了深度优化，特别适合资源受限的嵌入式设备。

- **专用编译器前端**：ARM CC 使用 ARM 自己的编译器前端，与现代的 Clang/LLVM 不同。

- **不完全支持现代 C/C++ 标准**：ARM CC 支持 C90 和 C++03 标准，但对 C99 和 C++11 支持有限。

- **较老的工具链**：随着技术的更新，ARM CC 已逐步被 ARM Clang 所取代。

**ARM CC 工具：**

- **armcc**: 编译器，用于编译 C/C++ 源文件。
- **armar**: 归档器，用于将 ELF 目标文件集合到一起
- **armasm**: 汇编器，用于编写和编译 ARM 汇编代码。
- **armlink**: 链接器，用于链接目标文件。
- **fromelf**: 同样提供生成和分析 ELF 文件的功能。

## ARM Compiler 6

**ARM Clang** 是基于 LLVM 开源编译器技术的 ARM 编译器，属于现代 ARM 编译工具链的一部分（从 ARM Compiler 6 开始）。它完全符合 C/C++ 标准，并集成了现代编译技术，支持更灵活的优化策略和更好的代码生成。

**ARM Compiler 6 特点：**

- **LLVM 优势**：ARM Clang 基于 LLVM，这使得它可以利用 LLVM 的高度优化功能，如高级的编译优化技术和静态分析工具。
- **更强的 C++ 支持**：相较于 ARM CC 和 GNU GCC，ARM Clang 对 C++11、C++14 等现代 C++ 特性有更好的支持。
- **更现代的工具链**：LLVM 提供了更强大的调试、优化、诊断和分析功能，使得 ARM Clang 成为一个现代化的编译器。
- **与 GNU GCC 兼容**：ARM Clang 在很多方面与 GNU GCC 保持兼容，这使得开发者可以平滑过渡到 ARM Clang。

**ARM Compiler 6 工具**：

- **armclang**：基于LLVM和Clang技术的编译器和集成汇编器
- **armasm**：已弃用旧版 Arm 架构的 armasm-syntax 汇编代码旧版汇编程序。对所有新汇编文件使用 armclang 集成汇编程序
- **armar**: 归档器，用于将 ELF 目标文件集合到一起
- **armlink**： 链接器，将对象和库组合起来以生成可执行文件
- [Arm C libraries](https://developer.arm.com/documentation/100073/latest/The-Arm-C-and-C---Libraries)：嵌入式系统运行时支持库
- [Arm C++ libraries](https://developer.arm.com/documentation/100073/latest/The-Arm-C-and-C---Libraries)：基于 LLVM libc++ 项目的库
- **fromelf**：ELF 镜像转换实用程序和反汇编程序
- **clang-format**:  自动化的代码格式化工具，用于保持代码的一致性和可读性

**文档：**

- User Guide: Provides instructions and examples to help you use the toolchain
- Reference Guide: Provides information to help you configure the toolchain
- Arm C and C++ Libraries andFloating-Point Support UserGuide: Provides information about the Arm libraries and floating-point support
- Errors and Warnings ReferenceGuide: Provides a list of the errors and warnings that can be reported by armar, armasm, armlink, and fromelf
- Migration and CompatibilityGuide: Provides information to help you migrate from Arm Compiler 5 to Arm Compiler for Embedded
- Release Notes: These release notes

![ARM Compiler 6](https://developer.arm.com/-/jssmedia/Arm%20Developer%20Community/Images/How%20it%20Works-Process%20Steps%20and%20Certifications/Arm%20Compiler%20for%20Embedded%20FuSa/Arm-Compiler-workflow-diagram.svg?iar=0&rev=d157d468bcbf4451aa04a8217e82627c&hash=B93A2612DD5895777CEEFBB54080B90BEE98116B)

## ARM GNU GCC

**ARM GNU GCC** 是 GNU 工具链的一部分，是一种开源的 C/C++ 编译器，专为 ARM 处理器架构设计。它基于 GNU Compiler Collection（GCC），并且使用 GNU Binutils、GDB 等工具进行开发。ARM GNU GCC 作为一个跨平台的编译器，支持多种操作系统，如 Linux、Windows 和 macOS，并且广泛应用于嵌入式系统开发中。

**ARM GNU GCC 特点：**

- **开源且免费的**：ARM GNU GCC 是开源的，遵循 GPL 许可证，可以自由使用和修改。
- **广泛的架构支持**：支持各种 ARM 架构，包括 ARMv5、ARMv6、ARMv7、ARMv8，以及不同的 ARM 处理器系列（如 Cortex-M、Cortex-A、Cortex-R 等）。
- **优化支持**：支持各种优化选项（如 `-O2`, `-O3`, `-Os` 等），可以根据不同的需求调整代码的性能和大小。
- **调试支持**：可以与 GDB 等调试工具配合使用，方便进行嵌入式系统的调试。
- **强大的社区支持**：由于它是开源的，拥有一个庞大的用户社区，遇到问题时容易找到解决方案。
- **广泛的硬件支持**：它支持多种 ARM 处理器架构，非常适合多平台开发。
- **性能优化较弱**：虽然 GNU GCC 提供了优化选项，但相较于 ARM 自家的编译器，它的性能可能稍逊色。
- **不如 Clang 现代**：GNU GCC 在现代化的工具链功能（如诊断、优化、C++ 标准支持等）上相比 Clang 稍显滞后。

## ARM Clang 和 ARM CC 的对比

| 特性              | **ARM Clang**                  | **ARM CC**                                       |
| ----------------- | ------------------------------ | ------------------------------------------------ |
| **架构**          | 基于 LLVM/Clang 框架           | ARM 专有编译器架构                               |
| **优化能力**      | 现代优化技术，支持最新标准优化 | 针对 ARM 架构深度优化                            |
| **支持的 C 标准** | C99、C11、C++11、C++14         | C90、C99（有限）、C++03（有限）                  |
| **性能**          | 优化后通常生成更高效代码       | 针对资源受限设备有良好表现                       |
| **工具链版本**    | ARM Compiler 6 及更高版本      | ARM Compiler 5 及更低版本                        |
| **开发灵活性**    | 更现代、更开放，支持 LLVM 插件 | 专有技术，灵活性较差                             |
| **推荐使用场景**  | 新项目和需要现代标准支持的开发 | 维护老项目或对 ARM Compiler 5 兼容性有要求的场景 |

- **新项目开发**：建议选择 ARM Clang（ARM Compiler 6 及以上版本），它支持最新的 C/C++ 标准，且在编译优化方面表现更佳。
- **老项目维护**：对于依赖 ARM Compiler 5 的旧项目，继续使用 ARM CC 可以确保兼容性。
- **开源项目开发**：如果需要一个免费的工具链，ARM GNU GCC 是一个理想选择。
- **高效嵌入式开发**：ARM CC 是专为 ARM 处理器优化的商业编译器，适合需要高效代码的开发者。
